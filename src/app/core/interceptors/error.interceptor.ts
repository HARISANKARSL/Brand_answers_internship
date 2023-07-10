import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private route:Router,private toastr:ToastrService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error)=>{
        if(error instanceof HttpErrorResponse){
         if(error.error instanceof ErrorEvent){
          console.log('Error event')
         }else{
          switch(error.status){
            case 401:
              console.log(error.status);
              break;
              case 403:
              console.log(error.status);
              break;
              case 404:
                this.showError()
              console.log(error.status);
              break;
              case 503:
              console.log(error.status);
              break;
              

          }
         }
        }else{
          console.log("an error occured")
        }
        return throwError(()=> new Error(error.statusText));
      })
    );
  }
  showError(){
    this.toastr.error('page not found','HTTP error')
  }
}
