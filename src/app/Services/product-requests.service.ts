import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IApiResponse } from '../Models/api-responce';

@Injectable({
  providedIn: 'root',
})
export class ProductRequestsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<IApiResponse> {
    return this.httpClient.get<IApiResponse>(
      `${environment.BAseApiURL}/product?limit=1000000000000`
    );
  }
  getTopProducts(): Observable<IApiResponse> {
    return this.httpClient.get<IApiResponse>(
      `${environment.BAseApiURL}/product?limit=7&sort=-boughtUnits`
    ); //for now
  }
  getProductCountPerYear(): Observable<{
    result: [{ count: number; year: number; month: number }];
    productCount: number;
  }> {
    return this.httpClient.get<{
      result: [{ count: number; year: number; month: number }];
      productCount: number;
    }>(`${environment.BAseApiURL}/product/perMonth`); //for now
  }

  getProductById(id: string): Observable<Object> {
    return this.httpClient.get<Object>(
      `${environment.BAseApiURL}/product/${id}`
    );
  }
}
