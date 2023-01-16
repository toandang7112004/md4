import { Component } from '@angular/core';
import { ProductService } from "./../product.service";
import { Product } from "./../product";
@Component({
  selector: 'app-products',
  templateUrl: './../templates/products.component.html',
})
export class ProductsComponent {
  products:Product[] = [];
  constructor(
    private _ProductService:ProductService
  ) { }
  ngOnInit(): void {
    this._ProductService.all().subscribe(products => {
      this.products = products
    });
    console.log(this.products);
  }
}
