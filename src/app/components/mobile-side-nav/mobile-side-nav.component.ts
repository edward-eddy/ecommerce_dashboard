import { Component } from '@angular/core';
import { AdminAuthService } from '../../services/admin-auth.service';

@Component({
  selector: 'app-mobile-side-nav',
  templateUrl: './mobile-side-nav.component.html',
  styleUrl: './mobile-side-nav.component.scss'
})
export class MobileSideNavComponent {
  constructor(private adminAuth:AdminAuthService){}

  signOut(){
    this.adminAuth.logout()
  }
}

