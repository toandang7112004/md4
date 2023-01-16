import { Component } from '@angular/core';
import {  Product} from './../../product';
import {  ProductService} from './../../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products : Product[] =[];
  constructor(private _ProductService:ProductService){

  }
  ngOnInit(): void{
    // goi phuong thuc all
    let items = this._ProductService.all();
    this.products = items;
    console.log(this.products);
  }
}