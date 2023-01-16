import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './../templates/category-edit.component.html',
})
export class CategoryEditComponent {
  productForm!: FormGroup;
  id:any;
  category!:Category;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _CategoryService:CategoryService,
    private _Router: Router
  ) {}
  ngOnInit(): void {

    //lay id tu url xuong
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._CategoryService.findById(id).subscribe(category => {
        this.category = category;
        console.log(this.category.name);
        this.productForm = new FormGroup({
          
          name: new FormControl(this.category.name,[
            Validators.required,
            Validators.minLength(3)
          ]),
        });
      });
    });
  }
  handleSubmit():void{
    let productData:Category = {
      name: this.productForm.value.name,
    }
    this._CategoryService.updateCategory(this.id, productData).subscribe(() => {
      //chuyen huong ve list
      this._Router.navigate(['/category']);
    }, (e: any) => {
      console.log(e);
    });
    // this._ProductService.update(this.id,productData);
    //chuyen huong ve list
    // this._Router.navigate(['/']);
  
  }
}
