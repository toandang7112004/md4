import { Injectable } from '@angular/core';
import { Category } from './category';
import { environment } from './../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [];
  api_url:string = '';
  constructor( private http:HttpClient ) { 
    this.api_url = environment.apiUrl;
  }
  all(page: number):Observable<Category[]>{
    return this.http.get<Category[]>(this.api_url + '?page=' + page);  
  }
  find(id:any):Observable<Category>{
    return this.http.get<Category>(this.api_url+'/'+id);
  }
  save(category:Category){
    return this.http.post<Category>(this.api_url , category);
  }
  update(id:number,category:Category){
    return this.http.put<Category>(this.api_url + '/' + id, category);
  }
  destroy(id:number){
    return this.http.delete<Category>(this.api_url + '/' + id);
  }
}
