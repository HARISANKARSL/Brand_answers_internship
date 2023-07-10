import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }
  getItems(){
    return this.http.get<any>("assets/items.json")
  }
productlist(){
  return this.http.get<any>('https://fakestoreapi.com/products')
}
allItems(){
  return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
}
products(){
  return this.http.get<any>('https://dummyjson.com/products')
}
}
