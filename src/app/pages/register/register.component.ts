import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../models/iuser';
import { UserRequestsService } from '../../services/user-requests.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  userRegisterForm : FormGroup;
  user : IUser = {} as IUser
  userLoginForm: any;

  nameRegx = /^[a-zA-Z0-9 ]{3,20}$/;

  // email with regx and errors
  emailRegx = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;

  // password with regx and errors
  passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  constructor (private formBuilder : FormBuilder ,private router : Router , private userService : UserRequestsService){
    this.userRegisterForm = this.formBuilder.group({
      name : ['' , [Validators.required , Validators.minLength(5) , Validators.pattern(this.nameRegx)]],
      email : ['' , [Validators.required , Validators.email , Validators.pattern(this.emailRegx)]],
      password : ['' , [Validators.required , Validators.minLength(6) , Validators.pattern(this.passwordRegx)]],
      role : ['admin' , [Validators.required ]],


    })
    // if(!userService.isUserLogged){
    //   router.navigate(['/'])
    // }
  }

  get name(){
    return this.userRegisterForm.get('name')
  }
  get email(){
    return this.userRegisterForm.get('email')
  }
  get password(){
    return this.userRegisterForm.get('password')
  }

  signUpFunc(){
    this.userService.signup(this.userRegisterForm.value).subscribe({
      next :(data) =>{
        console.log(data);
        this.router.navigate(["/login"])

      },
      error(err) {
        console.log(err);

      },
    })
  }



  moveToLogin(){
    this.router.navigate(["/login"])
  }
}
