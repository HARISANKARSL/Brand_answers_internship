import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signUpForm(data:any){
    return this.http.post<any>('http://localhost:3000/posts',data)
   }
   login(){
     return this.http.get<any>('http://localhost:3000/posts');
     
   }
   isLogin(){
    return localStorage.getItem('token')!=null
    
   }
 
}

