import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRequestsService } from '../Services/user-requests.service';

export const adminLoginGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserRequestsService)
  const router = inject(Router)

  if (!userService.isUserLogged){
    return true
  } else {
    router.navigate(['/'])
    return false
  }
};
