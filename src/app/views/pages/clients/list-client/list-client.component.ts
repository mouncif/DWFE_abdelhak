import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../../services/clients.service';
import { Router } from '@angular/router';
import { Client } from '../../../../models/client';


@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients = [];

  constructor(
    private clientSerivce: ClientsService,
    private router:Router
  ) { }

  ngOnInit() {
    this.fetchClients();
  }

  fetchClients() {
    this.clientSerivce.findAll()
      .subscribe(response => {
        this.clients = response;
      });
  }
  delete(client: Client){
    this.clientSerivce.delete(client.id).subscribe(res => {
      this.fetchClients();
    });
  }
  edit(client: Client){
    this.clientSerivce.setter(client);
    console.log(client);
    this.router.navigateByUrl('/addclient');
  }

}
