import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRequestsService } from '../Services/user-requests.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  // the chart doesn't work with it
  const userService = inject(UserRequestsService)
  const router = inject(Router)


  if (userService.isUserLogged){
    return true
  } else {
    router.navigate(['/login'])
    return false
  }
  // return true
};
