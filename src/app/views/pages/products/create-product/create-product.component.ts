import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

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

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.product = this.productService.getter();
  }

  createProduct(){

    if(this.product.id == undefined){
      this.productService.addProduct(this.product).subscribe(res =>{
        console.log(this.product);
        this.router.navigateByUrl('/listProducts');
      });
    }
    else{
      this.productService.editProduct(this.product).subscribe(res =>{
        console.log(this.product);
        this.router.navigateByUrl('/listProducts');
      });
    }
    
  }

}
