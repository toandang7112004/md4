import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Product } from "./../../product";
import { ProductService } from "./../../product.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
})
export class ProductDeleteComponent implements OnInit {
  id: any;
  product!: Product;
  constructor(
    private _ProductService: ProductService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      
      this.product = this._ProductService.find(id);

    });
  }
  delete(){
    this._ProductService.destroy(this.id);
     //Chuyen huong ve list
     this._Router.navigate(['/products']);
  }
}
