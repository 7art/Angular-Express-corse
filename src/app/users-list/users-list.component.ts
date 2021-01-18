import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {


  usersList = [];

  constructor(public usersServise: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersServise.getUsersList();
  }



}
