import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modelsUsers/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {


  users: User[] = [];
  
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }
 
  getUsers(){
    this.usersService.findAll()
    .subscribe(users=> this.users = this.users)
  }

  deleteUser(id){
    this.usersService.delete(id)
     .subscribe(() => {
       this.users = this.users.filter(user => user.id  != id)
     })
 }
}
