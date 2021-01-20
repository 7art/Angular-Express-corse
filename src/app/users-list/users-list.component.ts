import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {


  usersList: User[] = [];

  constructor(public usersServise: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersServise.getUsersList();
  }

  search(query:string){
    this.usersList = this.usersServise.findUser(query);
  }

  sort(direction:string){
    this.usersList = this.usersServise.sortUsers(direction);
  }

}
