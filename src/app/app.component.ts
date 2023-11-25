import { Component } from '@angular/core';
import { UserRequestsService } from './Services/user-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce_dashboard';
  constructor(private userService : UserRequestsService, private router : Router){
    // if(!userService.isUserLogged){
    //   console.log(userService.isUserLogged);

    //   router.navigate(['/login'])
    // }
  }
}
