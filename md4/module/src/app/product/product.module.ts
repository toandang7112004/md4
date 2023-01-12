import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products.component';
import { ProductAddComponent } from './components/product-add.component';
import { ProductEditComponent } from './components/product-edit.component';
import { ProductComponent } from './components/product.component';
import { ProductDeleteComponent } from './components/product-delete.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
