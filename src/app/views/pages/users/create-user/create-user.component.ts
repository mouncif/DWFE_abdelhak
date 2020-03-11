import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modelsUsers/user';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private user: User={
    id: null,
    identifiant:'',
    creationDate:null,
    email:'',
    image:'',
    endDate:null,
    profils:''
  };
  constructor(private userService: UsersService, private router: Router ) { }

  ngOnInit() {
    this.user = this.userService.getter();
  }

  createUser(){

    if(this.user.id == undefined){
      this.userService.addUser(this.user).subscribe(res =>{
        console.log(this.user);
        this.router.navigateByUrl('/listUsers');
      });
    }
    else{
      this.userService.editUser(this.user).subscribe(res =>{
        console.log(this.user);
        this.router.navigateByUrl('/listUsers');
      });
    }
    
  }

  profils = ['ADMIN', 'EDITOR', 'USER'];

}
