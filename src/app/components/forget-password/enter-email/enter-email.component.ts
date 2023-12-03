import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrl: './enter-email.component.scss'
})
export class EnterEmailComponent {
  resetPasswordForm: FormGroup;
  displayForm: String = "code"
  get email() {
    return this.resetPasswordForm.get('email');
  }
  get code() {
    return this.resetPasswordForm.get('code');
  }
  get password() {
    return this.resetPasswordForm.get('password');
  }
  get conPassword() {
    return this.resetPasswordForm.get('conPassword');
  }
  constructor(private formBuilder: FormBuilder,
    private router: Router,){
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      code: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      password: ['', [Validators.required]],
      conPassword: ['', [Validators.required]],
    });
  }
  goEnterEmail(){
    
  }
  sendCode(){

  }
  resetPassword(){

  }
}
