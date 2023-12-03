import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs';
import { AdminAuthService } from './services/admin-auth.service';

@Injectable()
export class adminTokenInterceptor implements HttpInterceptor {
  constructor(private adminAuth: AdminAuthService){}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // let cookies = document.cookie.split(/[;=]/);
    // let token = cookies[cookies.indexOf('token') + 1];
    let token = this.adminAuth.getToken()
    const newRequest = req.clone({
      setHeaders: {
        Token: token ? token : '',
      },
    });
    return next.handle(newRequest).pipe(
      tap(
        (response) => {
        if (response instanceof HttpResponse) {
          // XXXXXXXXXXXXXXXXXXXXX NOT WORKING XXXXXXXXXXXXXXXXXXXXX
          // if (response.status == 401 || response.body.message === "Invalid token, logOut" || response.body.message === "invalid token") {
          //   this.adminAuth.logout()
          // }
        }
      },
      (error) => {
        console.log("=================>", error.error.message);

        if (error.status === 401 && error.error.message === "Invalid token, logOut")
        this.adminAuth.logout()
      })
    );
  }
}
