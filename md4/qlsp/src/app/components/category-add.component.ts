import { Component } from '@angular/core';
import {FormControl, FormGroup ,Validators} from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
@Component({
  selector: 'app-category-add',
  templateUrl: './../templates/category-add.component.html',
})
export class CategoryAddComponent {
  formProfile!: FormGroup;
  constructor(
    private CategoryService:CategoryService,
    private _Router: Router,
  ){
​
  }
  ngOnInit(){
    this.formProfile = new FormGroup({
      'name': new FormControl('',[
        Validators.required,
      ]),
    })
  }
// ​
  handleSubmit(value:any){
    let category:Category = {
      name: value.name,
    }
    // Goi service
    this.CategoryService.saveCategory(category);
    //Chuyen huong ve list
    this._Router.navigate(['/category']);
​
  }
}
