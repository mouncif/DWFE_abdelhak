import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from '../../../../models/fournisseur';
import { FournisseursService } from '../../../../services/fournisseurs.service';

@Component({
  selector: 'app-create-fournisseur',
  templateUrl: './create-fournisseur.component.html',
  styleUrls: ['./create-fournisseur.component.css']
})
export class CreateFournisseurComponent implements OnInit {
  private fournisseur: Fournisseur={
    id: null,
    nameSupplier:'',
    shortSupplierName:'',
    supplierCity:null,
    adressSupplier:'',
    PhoneFix:'',
    PhoneNumber:null,
    faxSupplier:null,
    email:''

  };

  constructor(private fournisseurService: FournisseursService, private router: Router) { }

  ngOnInit() {
    this.fournisseur = this.fournisseurService.getter();
  }
  createFournisseur(){
    console.log()
    if(this.fournisseur.id == undefined){
      this.fournisseurService.addFournisseur(this.fournisseur).subscribe(res =>{
        console.log(this.fournisseur);
        this.router.navigateByUrl('/listFournisseurs');
      });
    }
    else{
      this.fournisseurService.editFournisseur(this.fournisseur).subscribe(res =>{
        console.log(this.fournisseur);
        this.router.navigateByUrl('/listFrournisseurs');
      });
    }
    
  }

}
