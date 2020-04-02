import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = "radu";
  allowAccess = false;
  userInput = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendValues() {
    if (this.userInput.toLowerCase() === this.userName) {
      this.allow()
    }
  }

  allow() {
    return this.allowAccess = true;
  }
}
