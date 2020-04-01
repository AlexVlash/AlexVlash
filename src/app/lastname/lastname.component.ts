import { Component, OnInit } from '@angular/core';
import { User } from '../shared/users.model'
import { of } from 'rxjs';

@Component({
  selector: 'app-lastname',
  templateUrl: './lastname.component.html',
  styleUrls: ['./lastname.component.css']
})
export class LastnameComponent implements OnInit {

  users = [{
    first: "Alex",
    last: "Vlash",
    eyecolor: "blue"
  },
  {
    first: "John",
    last: "Doe",
    eyecolor: "green"
  },
  {
    first: "Andy",
    last: "Gomez",
    eyecolor: "green"
  },
  {
    first: "Nicu",
    last: "Ploaie",
    eyecolor: "brown"
  },
  {
    first: "Linda",
    last: "Cunning",
    eyecolor: "brown"
  },
  {
    first: "Gus",
    last: "Fring",
    eyecolor: "blue"
  },
  {
    first: "Josh",
    last: "Norring",
    eyecolor: "green"
  },
  {
    first: "Ruben",
    last: "Growings",
    eyecolor: "brown"
  }]

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
        if (user.last.toLowerCase().indexOf(this.searchInput.toLowerCase()) > -1) {
          this.usersSearch.push(user);
        }
      }
    }
  }

  resetUsers() {
    this.usersSearch = this.users;
  }
}
