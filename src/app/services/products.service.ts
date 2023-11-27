import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpheader = {};
  constructor(private httpClient: HttpClient) {
    this.httpheader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
  //======================< Get All Products >=================================================
  getAllProducts(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(
      `${environment.BAseApiURL}/product?limit=99999999`
    );
  }
  //======================< Get Product By Id >================================================
  getProductById(prdId: number): Observable<Products> {
    return this.httpClient.get<Products>(
      `${environment.BAseApiURL}/products/${prdId}`
    );
  }
  //======================< Creat new Product >================================================
  insertNewProduct(product: Products): Observable<Products> {
    return this.httpClient
      .post<Products>(
        `${environment.BAseApiURL}/product`,
        JSON.stringify(product),
        this.httpheader
      )
      .pipe(
        retry(3),
        catchError((err) => {
          console.error('HTTP request failed:', err);
          return throwError(() => {
            return new Error(err);
          });
        })
      );
  }
  //=======================< delet products >==============================================
  deletProduct(id: number | undefined) {
    var product = `${environment.BAseApiURL}/product/${id}`;
    return this.httpClient.delete(product);
  }
}
