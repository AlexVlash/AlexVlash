import { Component, OnInit, Input} from '@angular/core';
import { User } from '../users.model'
import { FirstnameComponent } from '../firstname/firstname.component';

@Component({
  selector: "app-eyecolor",
  templateUrl: "./eyecolor.component.html",
  styleUrls: ["./eyecolor.component.css"]
})
export class EyecolorComponent implements OnInit {

  users: User[];

  usersSearch;
  searchInput: string;

  constructor() {
    this.usersSearch = this.users;
  }

  ngOnInit(): void {
    this.resetUsers();
  }

  onSearch() {
    this.usersSearch = [];
    if (this.searchInput === '') {
      this.usersSearch = this.users;
    } else {
      for (const user of this.users) {
        if (user.eyecolor.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1) {
          this.usersSearch.push(user);
        }
      }
    }
  }

  resetUsers() {
    this.usersSearch = this.users;
  }
}
