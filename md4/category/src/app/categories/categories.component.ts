import { Component } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  categories: Category[] = [];
  p: number = 1;
  constructor (private _CategoryService:CategoryService ) {} 
  ngOnInit():void{
    this._CategoryService.all(this.p).subscribe(categories => {
      this.categories = categories
      // console.log(this.categories);
    });
  }
  pageChangeEvent(event: number){
    this.p = event;
    this._CategoryService.all(this.p);
}
}