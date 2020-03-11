import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private url = "http://localhost:3000/clients"
  private client: Client={
    id: null,
    lastName:'',
    firstName:'',
    statut:null,
    image:'',
    phoneNumber:'',
    email:null,
    adress:null,
    city:''

  };

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Client[]>(this.url);
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  addClient(client: Client){
    return this.http.post(this.url, client);
  }
  editClient(client: Client){
    return this.http.put(this.url+'/'+client.id, client);
  }
  getter(){
    return this.client;
  }
  setter(client: Client){
    this.client = client;
  }
}
