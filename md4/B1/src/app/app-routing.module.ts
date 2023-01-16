import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './tutorial-router/product-add/product-add.component';
import { ProductDeleteComponent } from './tutorial-router/product-delete/product-delete.component';
import { ProductEditComponent } from './tutorial-router/product-edit/product-edit.component';
import { ProductsComponent } from './tutorial-router/products/products.component';

const routes: Routes = [
  { path: '',redirectTo: 'products', pathMatch: 'full' },
  { path: 'products',component: ProductsComponent },
  { path: 'products/add',component: ProductAddComponent },
  { path: 'products/:id/edit',  component: ProductEditComponent },
  { path: 'products/:id/delete',component: ProductDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
