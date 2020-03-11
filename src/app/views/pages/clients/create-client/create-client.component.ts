import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../../../../models/client';
import { ClientsService } from '../../../../services/clients.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
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

  constructor(private clientService: ClientsService, private router: Router) { }

  ngOnInit() {
    this.client = this.clientService.getter();
  }
  createClient(){
    console.log()
    if(this.client.id == undefined){
      this.clientService.addClient(this.client).subscribe(res =>{
        console.log(this.client);
        this.router.navigateByUrl('/listClients');
      });
    }
    else{
      this.clientService.editClient(this.client).subscribe(res =>{
        console.log(this.client);
        this.router.navigateByUrl('/listClients');
      });
    }
    
  }

}
