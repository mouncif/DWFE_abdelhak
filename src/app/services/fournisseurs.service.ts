import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fournisseur } from '../models/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {

  private url = "http://localhost:3000/fournisseurs"
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

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Fournisseur[]>(this.url);
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  addFournisseur(fournisseur: Fournisseur){
    return this.http.post(this.url, fournisseur);
  }
  editFournisseur(fournisseur: Fournisseur){
    return this.http.put(this.url+'/'+fournisseur.id, fournisseur);
  }
  getter(){
    return this.fournisseur;
  }
  setter(fournisseur: Fournisseur){
    this.fournisseur = fournisseur;
  }
}
