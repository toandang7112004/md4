import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
})
export class ProductDeleteComponent {
  product! : Product;
  id:any = 0;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductService,
    private _Router: Router
  ) {}
  ngOnInit(){
    // goi phuong thuc all
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._ProductService.find(id).subscribe(product => {
       this.product = product;
      });
  });
  }
  handleDelete(id:any){
    this._ProductService.destroy(this.id).subscribe(() => {
      //chuyen huong ve list
      this._Router.navigate(['/']);
    }, (e: any) => {
      console.log(e);
    });
  }
  back(){
    this._Router.navigate(['/']);
  }
}