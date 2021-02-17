import { Injectable } from "@angular/core";
import { Blog } from "./shared/blog";
import { BlogList } from "./shared/bloglist";

@Injectable()
export class BlogServiceService {
  blogs: Array<Blog> = [];
  constructor() {
    this.blogs = BlogList;
  }

  getBlogs(): Blog[] {
    return BlogList;
  }

  getBlog(id: string): Blog {
    return BlogList.filter(blog => blog.id == id)[0];
  }

  addBlog(blog: Blog) {
    BlogList.push(blog);
    return BlogList;
  }

  edit(blog: Blog) {
    let findElem = BlogList.find(p => p.id == blog.id);
    findElem.name = blog.name;
    findElem.description = blog.description;
    return BlogList;
  }

  remove(id: string) {
    // this.blogs = BlogList.remove(p => p.id == id);
    // console.log(this.blogs);
    BlogList.forEach((value, index) => {
      if (value.id == id) BlogList.splice(index, 1);
    });
    console.log(BlogList);
    return BlogList;
  }
}
