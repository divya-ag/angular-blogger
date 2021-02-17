import { Routes } from "@angular/router";

import { BlogComponent } from "../blog/blog.component";
import { LoginComponent } from "../login/login.component";

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "blog", component: BlogComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" }
];
