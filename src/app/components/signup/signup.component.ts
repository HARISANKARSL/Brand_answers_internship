import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { matchpass } from 'src/app/matchpassword.validator';
import { AuthService } from 'src/app/services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpData:object={}
  signUpForm!:FormGroup
  result=[]
  passwordShow = true;
  confirmpass=true
  constructor(private SignupService:AuthService,private route:Router,private toast:ToastrService,private spinner:NgxSpinnerService){}
  ngOnInit(){
    this.signUpForm=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
      mobile:new FormControl('',  [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")] ),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required, Validators.pattern(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
      )]),
      confirmpassword:new FormControl('',[Validators.required])
      
    },
    {
      validators:matchpass
    }
    )
  }
  
get f(){
  return this.signUpForm.controls;
}
signUp(data:any){
  console.log(this.signUpForm);
  this.SignupService.signUpForm(this.signUpForm.value).subscribe((result)=>{
console.log(result);
this.signUpData=result;

  })
  if(this.signUpData){
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.route.navigate(['/login'])
      this.toast.success(" Login using email and password ","successful Registration")
    }, 5000);

  
  }
}
onlyNumbers(event:any):boolean{
  const charchode=(event.which)?event.which:event.keyCode;
  if(charchode>31 && (charchode<48 || charchode>57)){
return false
  }
return true
}
}

