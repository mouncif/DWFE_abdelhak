import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/models/fournisseur';
import { FournisseursService } from 'src/app/services/fournisseurs.service';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  fournisseurs = [];

  constructor(
    private fournisseurSerivce: FournisseursService,
    private router:Router
  ) { }

  ngOnInit() {
    this.fetchFournisseurs();
  }

  fetchFournisseurs() {
    this.fournisseurSerivce.findAll()
      .subscribe(response => {
        this.fournisseurs = response;
      });
  }
  delete(fournisseur: Fournisseur){
    this.fournisseurSerivce.delete(fournisseur.id).subscribe(res => {
      this.fetchFournisseurs();
    });
  }
  edit(fournisseur: Fournisseur){
    this.fournisseurSerivce.setter(fournisseur);
    console.log(fournisseur);
    this.router.navigateByUrl('/addfournisseur');
  }

}
