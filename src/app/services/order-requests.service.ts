import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderRequestsService {

  constructor(private httpClient: HttpClient) { }

  getAllOrders():Observable<{allOrders:[]}>{
    return this.httpClient.get<{allOrders:[]}>(`${environment.BAseApiURL}/orders`)
  }
}
