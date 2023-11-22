import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../Models/api-responce';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserRequestsService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<object[]>{
    return this.httpClient.get<object[]>(`${environment.BAseApiURL}/users/10000000/0`)
  }
}
