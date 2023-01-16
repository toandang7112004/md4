import { Component } from '@angular/core';
import { Product } from "./../../product";
import { ProductService } from "./../../product.service";
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
})
export class ProductAddComponent {
  formProfile!: FormGroup;
  constructor(
    private _ProductService:ProductService,
    private _Router: Router,
  ){
​
  }
// ​
  ngOnInit(){
    this.formProfile = new FormGroup({
      'name': new FormControl('',[
        Validators.required,
      ]),
      'price': new FormControl('',[
        Validators.required,
      ]),
    })
  }
​
  handleSubmit(value:any){
    let product:Product = {
      name: value.name,
      price: value.price,
    }
    // Goi service
    this._ProductService.store(product);
    //Chuyen huong ve list
    this._Router.navigate(['/products']);
​
  }
}
