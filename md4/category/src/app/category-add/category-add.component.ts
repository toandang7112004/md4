import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
})
export class CategoryAddComponent {
  categories!:Category;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _CategoryService:CategoryService,
    private _Router: Router
  ) {}
  handleSubmit(value:any):void {
    let categoryData:Category = {
      name: value.name,
      description: value.description,
    }
    this._CategoryService.save( categoryData).subscribe(() => {
      //chuyen huong ve list
      this._Router.navigate(['/']);
    }, (e: any) => {
      console.log(e);
    });
    // this._Router.navigate(['/']);
  }
}
