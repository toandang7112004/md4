import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: ':id/show', component: ProductComponent },
    { path: 'add', component: ProductAddComponent},
    { path: ':id/edit', component: ProductEditComponent },
    { path: ':id/delete', component: ProductDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
