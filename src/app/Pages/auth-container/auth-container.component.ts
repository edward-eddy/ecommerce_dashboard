import { Component } from '@angular/core';
import { flipAnimation } from '../../Component/animation/user-container.animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrl: './auth-container.component.scss',
  animations: [flipAnimation],
})
export class AuthContainerComponent {

  constructor (private outlet : RouterOutlet){}
  // getRouterOutletState(){
  //   console.log(this.outlet.activatedRoute );
    
  //   return this.outlet.isActivated ? this.outlet.activatedRoute : '';
  // }
}
