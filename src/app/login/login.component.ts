import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  user = { username: "blogger@grapecity.com", password: "1qaz!QAZ" };
  error: string;

  ngOnInit() {}

  onSubmit() {
    if (
      this.user.username == "blogger@grapecity.com" &&
      this.user.password == "1qaz!QAZ"
    ) {
      this.router.navigate(["/blog"]);
    } else {
      this.error = "invalid username and password";
    }
  }
}
