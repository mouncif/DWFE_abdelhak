import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../modelsUsers/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<User[]>(this.url);
  }

  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
}
