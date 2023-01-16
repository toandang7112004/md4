import { Component } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
})
export class ProductAddComponent {
  product!:Product;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductService,
    private _Router: Router
  ) {}
  handleSubmit(value:any):void {
    let productData:Product = {
      name: value.name,
      description: value.description,
      price: value.price,
    }
    this._ProductService.save( productData).subscribe(() => {
      //chuyen huong ve list
      this._Router.navigate(['/']);
    }, (e: any) => {
    });
  }
}
