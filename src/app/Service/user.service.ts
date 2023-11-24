// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable, retry, catchError, throwError } from 'rxjs';
// import { environment } from '../../environments/environment.development';
// import { IUser } from '../Models/iUser';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   userLoggedBehavior : BehaviorSubject<boolean>;

//   httpheader={};

//   constructor(private httpclient : HttpClient) {

//     this.userLoggedBehavior = new BehaviorSubject<boolean>(this.isUserLogged);

//   }

//   login(user : IUser) : Observable<object>{
//     // let token = 'token';
//     // localStorage.setItem('userToken', token);
//     console.log(user);

//     return this.httpclient.post<IUser>(`${environment.BaseApiURL}users/signin` , user , this.httpheader).pipe(
//       retry(3),
//       catchError((err)=>{
//         return throwError(()=>{
//           return new Error ('Error While Adding user')
//         })
//       })
//     )
//     // this.userLoggedBehavior.next(true);
//   }

//   signup(user : IUser) : Observable<IUser>{
//     // let token = 'token';
//     // localStorage.setItem('userToken', token);
//     console.log(user);

//     return this.httpclient.post<IUser>(`${environment.BaseApiURL}users/signup` , user , this.httpheader).pipe(
//       retry(3),
//       catchError((err)=>{
//         return throwError(()=>{
//           return new Error ('Error While Adding user')
//         })
//       })
//     )
//     // this.userLoggedBehavior.next(true);
//   }

//   logout(){
//     localStorage.removeItem('userToken');
//     this.userLoggedBehavior.next(false);
//   }

//   get isUserLogged(): boolean {
//     let token = localStorage.getItem('token')
//     return  token ? true : false;
//   }


//   getUserLoggedStatus():Observable<boolean> {
//     return this.userLoggedBehavior.asObservable();
//   }





//   addNewUser(user : IUser): Observable<IUser>{
//     return this.httpclient.post<IUser>(`${environment.BaseApiURL}/users` , JSON.stringify(user) , this.httpheader).pipe(
//       retry(3),
//       catchError((err)=>{
//         return throwError(()=>{
//           return new Error ('Error While Adding user')
//         })
//       })
//     )
//   }


// }
