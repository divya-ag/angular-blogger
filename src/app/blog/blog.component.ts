import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Blog } from "../shared/blog";
import { BlogServiceService } from "../blog-service.service";

import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";

import { BlogFormDialogComponent } from "../blog-form-dialog/blog-form-dialog.component";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  public displayedColumns: string[] = ["id", "name", "description", "date"];
  public columnsToDisplay: string[] = [...this.displayedColumns, "actions"];

  blogs: Blog[];

  public dataSource: MatTableDataSource<Blog>;
  constructor(
    private blogService: BlogServiceService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource<Blog>();
  }

  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
    this.dataSource.data = this.blogs;
    this.dataSource.sort = this.sort;
  }

  logOut() {
    this.router.navigate(["/login"]);
  }

  edit(data: Blog) {
    const dialogRef = this.dialog.open(BlogFormDialogComponent, {
      width: "400px",
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.blogService.edit(result);
      }
    });
  }

  delete(id: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.blogService.remove(id);
      }
    });
  }

  addBlog() {
    const dialogRef = this.dialog.open(BlogFormDialogComponent, {
      width: "400px",
      data: ""
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.blogService.addBlog(result);
      }
    });
  }
}
