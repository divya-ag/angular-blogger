import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { LoginComponent } from "./login/login.component";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { BlogComponent } from "./blog/blog.component";

import { AppRoutingModule } from "./app-routing/app-routing.module";
import { BlogServiceService } from "./blog-service.service";
import { BlogFormDialogComponent } from "./blog-form-dialog/blog-form-dialog.component";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";

import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    BlogComponent,
    BlogFormDialogComponent,
    ConfirmationDialogComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent],
  providers: [BlogServiceService]
})
export class AppModule {}
