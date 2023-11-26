import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  httpHeaders = {};
  constructor(public httpClient: HttpClient) {
    this.httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
  //=================< Get All Category >===================================================
  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      `${environment.BAseApiURL}/categories`
    );
  }
  //=================< Delete category >======================================================
  deletCategory(_id: string | undefined) {
    var category = `${environment.BAseApiURL}/categories/${_id}`;
    const headers = {
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NWQxZDI1ZWQ3NGQ1NDhmM2U1YzQ4YSIsImlhdCI6MTcwMDYzNDcxNiwiZXhwIjoxNzAwNjM4MzE2fQ.hjMU7XN0rfDzkbNRsL_-QP_fWD05Vx4iCCe28EVD_Zc',
        'Content-Type': 'application/json',
      },
    };
    return this.httpClient.delete(category, headers);
  }
  //================< Creat New Category >==================================================
  insertNewCategory(category: Category): Observable<Category> {
    return this.httpClient
      .post<Category>(
        `${environment.BAseApiURL}/categories`,
        JSON.stringify(category),
        this.httpHeaders
      )
      .pipe(
        retry(3),
        catchError((err) => {
          return throwError(() => {
            return new Error(err);
          });
        })
      );
  }
}
