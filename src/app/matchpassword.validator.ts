import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';





export const matchpass:ValidatorFn=(control:AbstractControl):ValidationErrors|null=>{
    let password= control.get('password');
    let confirmpassword=control.get('confirmpassword');
    if(password && confirmpassword && password .value!=confirmpassword?.value){
        return {
            passwordMatchError: true
        }
    }
    return null
}