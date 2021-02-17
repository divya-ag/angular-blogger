import { Component, OnInit, Inject } from "@angular/core";

import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Blog } from "../shared/blog";
import { BlogServiceService } from "../blog-service.service";

@Component({
  selector: "app-blog-form-dialog",
  templateUrl: "./blog-form-dialog.component.html",
  styleUrls: ["./blog-form-dialog.component.css"]
})
export class BlogFormDialogComponent implements OnInit {
  formInstance: FormGroup;
  headerValue: string;
  id: number;
  blogs: Blog[];
  constructor(
    public dialogRef: MatDialogRef<BlogFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Blog,
    public blogService: BlogServiceService
  ) {
    this.formInstance = new FormGroup({
      id: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      date: new FormControl("", Validators.required)
    });
    if (data) {
      this.headerValue = "Edit Blog";
      this.id = parseInt(data.id);
      this.formInstance.setValue(data);
    } else {
      this.headerValue = "Add Blog";
      this.blogs = this.blogService.getBlogs();
      console.log();
      this.id = parseInt(this.blogs.slice(-1)[0].id) + 1;
    }
  }

  ngOnInit() {}

  save(): void {
    this.dialogRef.close(Object.assign(new Blog(), this.formInstance.value));
  }
}
