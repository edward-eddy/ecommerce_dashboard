import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterEmailComponent } from './enter-email/enter-email.component';
import { EnterCodeComponent } from './enter-code/enter-code.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/resetPassword/mail',
    pathMatch: 'full',
  },
  {
    path: `mail`,
    component: EnterEmailComponent,
    title: `E-Mail Check`,
  },
  {
    path: `code`,
    component: EnterCodeComponent,
    title: `Code Check`,
  },
  {
    path: `newPassword`,
    component: NewPasswordComponent,
    title: `Enter your new Password`,
  }
];

@NgModule({
  declarations: [EnterEmailComponent, EnterCodeComponent, NewPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ForgetPasswordModule {}
