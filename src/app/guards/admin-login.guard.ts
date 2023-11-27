import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRequestsService } from '../services/user-requests.service';

export const adminLoginGuard: CanActivateFn = (route, state) => {
  var userService = inject(UserRequestsService)
  var router = inject(Router)

  if (!userService.isUserLogged){
    console.log("adminLoginGuard");

    return true
  } else {
    router.navigate(['/'])
    return false
  }
};
