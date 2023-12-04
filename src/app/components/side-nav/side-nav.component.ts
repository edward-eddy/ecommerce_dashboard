import { AdminAuthService } from './../../services/admin-auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  constructor(private adminAuth:AdminAuthService){}

  signOut(){
    this.adminAuth.logout()
  }
}
