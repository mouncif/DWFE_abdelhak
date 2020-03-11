import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/modelsUsers/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users = [];

  constructor(
    private userSerivce: UsersService,
    private router:Router
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
  delete(user: User){
    this.userSerivce.delete(user.id).subscribe(res => {
      this.fetchUsers();
    });
  }
  edit(user: User){
    this.userSerivce.setter(user);
    console.log(user);
    this.router.navigateByUrl('/adduser');
  }

}
