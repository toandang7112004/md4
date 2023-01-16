import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from "./../product.service";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products:Product[] = [];
  constructor( private _ProductService:ProductService ){

  }
  ngOnInit():void{
    this._ProductService.All().subscribe(products =>{
      this.products = products
      console.log(this.products);
    });
  }
}
