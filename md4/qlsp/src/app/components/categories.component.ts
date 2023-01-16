import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
@Component({
  selector: 'app-categories',
  templateUrl: './../templates/categories.component.html',
})
export class CategoriesComponent {
  categories: Category[] = [];
  constructor(private categoryService:CategoryService){
  }
  ngOnInit(){
    this.getAll();
  }
  getAll() {
    this.categories = this.categoryService.getAll();
  }
}
