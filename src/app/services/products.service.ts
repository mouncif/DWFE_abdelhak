import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = "http://localhost:3000/products"
  private product: Product={
    id: null,
    productName:'',
    shortProductName:'',
    basePrice:'',
    sellingPrice:'',
    discount:null,
    productUnit:null,
    image:'',
    initialQte:null,
    currentQte:null

  };
 

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Product[]>(this.url);
  }

  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  addProduct(product: Product){
    return this.http.post(this.url, product);
  }
  editProduct(product: Product){
    return this.http.put(this.url+'/'+product.id, product);
  }
  getter(){
    return this.product;
  }
  setter(product: Product){
    this.product= product;
  }
}
