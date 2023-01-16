import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [{
    id: 1,
    name: 'IPhone'
  }, {
    id: 2,
    name: 'Samsung',
  }, {
    id: 3,
    name: 'LG',
  }];
  products: Category[] = [];
  api_url:string = '';
  constructor(
    private http:HttpClient
  ) {
    this.api_url = environment.api_url;
   }
  all():Observable<Category[]>{
    return this.http.get<Category[]>(this.api_url);  
  }
  find(id:any):Observable<Category>{
    return this.http.get<Category>(this.api_url+'/'+id);
  }
  save(product:Category){
    return this.http.post<Category>(this.api_url , product);
  }
  update(id:number,product:Category){
    return this.http.put<Category>(this.api_url + '/' + id, product);
  }
  destroy(id:number){
    return this.http.delete<Category>(this.api_url + '/' + id);
  }
}
