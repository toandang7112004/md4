import { Component } from '@angular/core';
import { Category } from './../category';
import { CategoryService } from '../category.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
    selector: 'app-product-delete',
    templateUrl: './category-delete.component.html',
})
export class CategoryDeleteComponent {
    categories!: Category;
    id: any = 0;
    constructor(
        private _ActivatedRoute: ActivatedRoute,
        private _CategoryService: CategoryService,
        private _Router: Router
    ) { }
    ngOnInit() {
        // goi phuong thuc all
        this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
            const id = paramMap.get('id');
            this.id = id;
            this._CategoryService.find(id).subscribe(categories => {
                this.categories = categories;
            });
        });
    }
    handleDelete(id: any) {
        this._CategoryService.destroy(this.id).subscribe(() => {
            //chuyen huong ve list
            this._Router.navigate(['/']);
        }, (e: any) => {
            console.log(e);
        });
    }
}
