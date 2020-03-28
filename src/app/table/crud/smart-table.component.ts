import { Component } from '@angular/core';
import * as tableData from './smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';
import {Observable} from "rxjs";

import {UserService} from './../../services/user.service';
import {User} from './../../models/user';

@Component({
  templateUrl: './smart-table.component.html'
})
export class CrudtableComponent {
  list: Observable<User[]>;
  constructor(private userService: UserService,) {
  }
  settings = tableData.settings;

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userService.getUsers().subscribe(data => {
            this.list = data;
          }, error => console.log(error));
  }

  addRecord(event) {
    var user = {"name" : event.newData.name,
                "email" : event.newData.email,
                "password": event.newData.password}
    this.userService.createUser(user).subscribe(
        res => {
          console.log(res);
          event.newData  = res.data;
          event.confirm.resolve(event.newData);
      },error => console.log(error));
    console.log("click", user);
  }

  updateRecord(event) {
    console.log(event.newData);
    var user = {"name" : event.newData.name,
                "email" : event.newData.email}
    this.userService.updateUser(event.newData._id, user).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.newData);
      },error => console.log(error));
  }

  deleteRecord(event){
     console.log(event.data);
    this.userService.deleteUser(event.data._id).subscribe(
        res => {
          console.log(res);
          event.confirm.resolve(event.source.data);
      },error => console.log(error));

  }
}
