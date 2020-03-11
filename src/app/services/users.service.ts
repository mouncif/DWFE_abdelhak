import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modelsUsers/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "http://localhost:3000/users"
  private user: User={
    id: null,
    identifiant:'',
    creationDate:null,
    email:'',
    image:'',
    endDate:null,
    profils:''
  };
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<User[]>(this.url);
  }

  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  addUser(user: User){
    return this.http.post(this.url, user);
  }
  editUser(user: User){
    return this.http.put(this.url+'/'+user.id, user);
  }
  getter(){
    return this.user;
  }
  setter(user: User){
    this.user = user;
  }
}
