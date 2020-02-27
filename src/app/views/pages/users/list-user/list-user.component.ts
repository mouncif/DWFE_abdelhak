import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users = [];

  constructor(
    private userSerivce: UsersService
  ) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userSerivce.findAll()
      .subscribe(response => {
        this.users = response;
      });
  }

}
