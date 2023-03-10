import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent {
  productForm!: FormGroup;
  id:any;
  product!:Product;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductService,
    private _Router: Router
  ) {}
  ngOnInit(): void {

    //lay id tu url xuong
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._ProductService.find(id).subscribe(product => {
        this.product = product;
        console.log(this.product.name);
        this.productForm = new FormGroup({
          
          name: new FormControl(this.product.name,[
            Validators.required,
            Validators.minLength(3)
          ]),
          description: new FormControl(this.product.name,[
            Validators.required,
            Validators.minLength(3)
          ]),
          price: new FormControl(this.product.price,[
            Validators.required,
            Validators.minLength(3)
          ]),
        });
      });
    });
  }
  handleSubmit():void{
    let productData:Product = {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      price: this.productForm.value.price,
    }
    this._ProductService.update(this.id, productData).subscribe(() => {
      //chuyen huong ve list
      this._Router.navigate(['/']);
    }, (e: any) => {
      console.log(e);
    });
  }
}
