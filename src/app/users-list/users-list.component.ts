import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {


  usersList: User[] = [];
  username: string;
  name:string;
  role:string;
  selectedList: User[];

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
  addUser(){
    this.usersServise.addUser(
      {
        id: Math.floor((Math.random()*6)+10),
        name: this.name,
        username: this.username,
        email: "",
        role: this.role,
        phone: "",
        website: ""
      });
      this.usersList = this.usersServise.getUsersList();
  }

  selectedItem(users:MatListOption[]){

    this.selectedList = [];
    users.forEach(element => {
      this.selectedList.push(element.value);
    });
  }

  deleteUsers(){
    this.usersServise.deleteUsers(this.selectedList);
    this.usersList = this.usersServise.getUsersList();

  }

}
