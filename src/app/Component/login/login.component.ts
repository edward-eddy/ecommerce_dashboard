import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../Models/iUser';
import { Router } from '@angular/router';
import { UserRequestsService } from '../../Services/user-requests.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userLoginForm : FormGroup;
  user : IUser = {} as IUser
  constructor (private formBuilder : FormBuilder , private router : Router ,private userService : UserRequestsService){
    this.userLoginForm = this.formBuilder.group({
      email : ['' , [Validators.required , Validators.email]],
      password : ['' , [Validators.required , Validators.minLength(6)]]

    })

    console.log(userService.isUserLogged);
    // if(userService.isUserLogged){
    //   router.navigate(['/'])
    // }

  }


  get email(){
    return this.userLoginForm.get('email')
  }
  get password(){
    return this.userLoginForm.get('password')
  }



  moveToRegister(){

    this.router.navigate(["/register"])

  }


  loginFunc(){
    this.userService.login(this.userLoginForm.value).subscribe({
      next :(data) =>{
        let token = JSON.stringify(data)
        let tokenData = JSON.parse(token)
        console.log(tokenData.token);
        localStorage.setItem("token", tokenData.token);
        this.router.navigate(["/"])

      },
      error(err) {
        console.log(err);

      },
    })
  }


}
