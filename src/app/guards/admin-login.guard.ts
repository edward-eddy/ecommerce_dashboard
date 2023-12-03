import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRequestsService } from '../services/user-requests.service';
import { AdminAuthService } from '../services/admin-auth.service';

export const adminLoginGuard: CanActivateFn = (route, state) => {
  var userService = inject(UserRequestsService)
  var adminAuth = inject(AdminAuthService)
  var router = inject(Router)

  // if (!userService.isUserLogged){
  if (!adminAuth.isUserLogged){
    console.log("adminLoginGuard");

    return true
  } else {
    router.navigate(['/'])
    return false
  }
};
