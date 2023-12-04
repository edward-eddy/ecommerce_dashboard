import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IOrders } from '../models/iorders';

@Injectable({
  providedIn: 'root'
})
export class OrderRequestsService {

  constructor(private httpClient: HttpClient) { }

  getAllOrders():Observable<{allOrders:[]}>{
    return this.httpClient.get<{allOrders:[]}>(`${environment.BAseApiURL}/orders`)
  }

  getOneOrderById (id : string):Observable<IOrders>{
    return this.httpClient.get<IOrders>(`${environment.BAseApiURL}/orders/${id}`)
  }

  toggleStatus(id : string, status : string):Observable<IOrders>{
    return this.httpClient.patch<IOrders>(`${environment.BAseApiURL}/orders/${id}` , {"status" : status})
  }

}
