import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRequestsService } from '../services/user-requests.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserRequestsService)
  const router = inject(Router)


  if (userService.isUserLogged){
    console.log("adminAuthGuard");

    return true
  } else {
    router.navigate(['/login'])
    return false
  }
};
