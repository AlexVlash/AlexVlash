import { Component, OnInit } from '@angular/core';
import { User } from './shared/users.model'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Eyefinder";
  userName = "radu";
  allowAccess = false;
  userInput = '';

  sendValues() {
    if(this.userInput.toLowerCase() === this.userName) {
      this.allow()
    }
  }

  allow() {
    return this.allowAccess = true;
  }
}
