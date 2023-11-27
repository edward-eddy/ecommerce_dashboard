import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserRequestsService {

  userLoggedBehavior : BehaviorSubject<boolean>;

    httpheader={};

  constructor(private httpClient:HttpClient) {
    this.userLoggedBehavior = new BehaviorSubject<boolean>(this.isUserLogged);

  }

  getAllUsers():Observable<object[]>{
    return this.httpClient.get<object[]>(`${environment.BAseApiURL}/users/10000000/0`)
  }



    login(user : IUser) : Observable<object>{
      // let token = 'token';
      // localStorage.setItem('token', token);
      console.log(user);

      return this.httpClient.post<IUser>(`${environment.BAseApiURL}/users/signin` , user , this.httpheader).pipe(
        retry(3),
        catchError((err)=>{
          return throwError(()=>{
            this.userLoggedBehavior.next(true);
            return new Error ('Error While Adding user')
          })
        })
      )
    }

    signup(user : IUser) : Observable<IUser>{
      // let token = 'token';
      // localStorage.setItem('userToken', token);
      console.log(user);

      return this.httpClient.post<IUser>(`${environment.BAseApiURL}/users/signup` , user , this.httpheader).pipe(
        retry(3),
        catchError((err)=>{
          return throwError(()=>{
            return new Error ('Error While Adding user')
          })
        })
      )
      // this.userLoggedBehavior.next(true);
    }

    logout(){
      localStorage.removeItem('token');
      this.userLoggedBehavior.next(false);
    }

    // Error Maker
    get isUserLogged(): boolean {
      // let token = localStorage.getItem('token')
      // return  token ? true : false;
      return (localStorage.getItem('token'))? true : false;
    }
    // get isUserLogged(): boolean {
    //   if (typeof localStorage !== 'undefined') {
    //     let token = localStorage.getItem('token');
    //     console.log(localStorage, token);
    //     if (typeof token == 'string'){
    //       return true
    //     } else {
    //       return false
    //     }

    //   } else {
    //     // Handle the case when localStorage is not available
    //     console.log('localStorage is not available.');
    //     return false;
    //   }
    // }


    getUserLoggedStatus():Observable<boolean> {
      return this.userLoggedBehavior.asObservable();
    }





    addNewUser(user : IUser): Observable<IUser>{
      return this.httpClient.post<IUser>(`${environment.BAseApiURL}/users` , JSON.stringify(user) , this.httpheader).pipe(
        retry(3),
        catchError((err)=>{
          return throwError(()=>{
            return new Error ('Error While Adding user')
          })
        })
      )
    }




}
