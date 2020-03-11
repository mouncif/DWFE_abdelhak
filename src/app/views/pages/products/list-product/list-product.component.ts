import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { Router } from '@angular/router';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
   
  products = [];

  constructor(
    private productSerivce: ProductsService,
    private router:Router
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productSerivce.findAll()
      .subscribe(response => {
        this.products = response;
      });
  }
  delete(product: Product){
    this.productSerivce.delete(product.id).subscribe(res => {
      this.fetchProducts();
    });
  }
  edit(product: Product){
    this.productSerivce.setter(product);
    console.log(product);
    this.router.navigateByUrl('/addproduct');
  }

}
