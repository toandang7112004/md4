import { Component } from '@angular/core';
import { Category } from './../category';
import { CategoryService } from '../category.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
})
export class CategoryEditComponent {
  productForm!: FormGroup;
  id: any;
  categories!: Category;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _CategoryService: CategoryService,
    private _Router: Router
  ) { }
  ngOnInit(): void {
    //lay id tu url xuong
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      this._CategoryService.find(id).subscribe(categories => {
        this.categories = categories;
        console.log(this.categories.name);
        this.productForm = new FormGroup({
          name: new FormControl(this.categories.name, [
            Validators.required,
            Validators.minLength(3)
          ]),
          description: new FormControl(this.categories.description, [
            Validators.required,
            Validators.minLength(3)
          ]),
        });
      });
    });
  }
  handleSubmit(): void {
    let productData: Category = {
      name: this.productForm.value.name,
      description: this.productForm.value.description,
    }
    this._CategoryService.update(this.id, productData).subscribe(() => {
      //chuyen huong ve list
      this._Router.navigate(['/']);
    }, (e: any) => {
      console.log(e);
    });
  }
}
