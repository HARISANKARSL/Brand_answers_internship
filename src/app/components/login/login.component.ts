import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errMsg:any=''
  loginForm!:FormGroup;
  loginData:any=''
 
  constructor(private http:HttpClient,private route:Router,private toastr:ToastrService,private spinner:NgxSpinnerService,private loginservice:AuthService ){}
  
  hide = true;
ngOnInit(){
  
  this.loginForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
}

get f(){
  return this.loginForm.controls;
}

login(){
this.loginservice.login().subscribe((res)=>{
console.log(res,"res")
const user= res.find((a:any)=>{
  return a.email ===this.loginForm.value.email &&   a.password===this.loginForm.value.password
});
if(user){
  
  this.spinner.show();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 5000);
  this.toastr.success("success","Login Success")
 this.route.navigate(['/home']);
 localStorage.setItem('token',user.name)

}
else if( 
  this.errMsg='Invalid email or password')
 this.toastr.error("user not found","User not found")
setTimeout(() => {
  this.errMsg='';
 this.loginForm.reset()
}, 2000);

})

}



}
