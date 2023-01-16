import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories.component';
import { CategoryAddComponent } from './components/category-add.component';
import { CategoryEditComponent } from './components/category-edit.component';



const routes: Routes = [
    { path: '', component: CategoriesComponent },
    { path: 'add', component: CategoryAddComponent},
    { path: ':id/edit', component: CategoryEditComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule {
    
}