import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Subcategory } from '../Models/subcategory';

@Injectable({
  providedIn: 'root',
})
export class SubcategoryService {
  httpHeaders = {};
  constructor(public httpClient: HttpClient) {
    this.httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
  //=================< Get All Subcategory >================================================
  getAllSubCategories(): Observable<Subcategory[]> {
    return this.httpClient.get<Subcategory[]>(
      `${environment.BAseApiURL}/subCategories`
    );
  }
  //=================< Delete subcategory >=================================================
  deletSubCategory(_id: string | undefined) {
    var subcategory = `${environment.BAseApiURL}/subCategories/${_id}`;
    return this.httpClient.delete(subcategory);
  }
  //=================< Creat New Subcategory >==============================================
  //   insertNewSubCategory(subCategory: Subcategory): Observable<Subcategory> {
  //     return this.httpClient
  //       .post<Subcategory>(
  //         `${environment.BAseApiURL}/subcategories`,
  //         JSON.stringify(subCategory),
  //         this.httpHeaders
  //       )
  //       .pipe(
  //         retry(3),
  //         catchError((err) => {
  //           return throwError(() => {
  //             return new Error(err);
  //           });
  //         })
  //       );
  //   }
  // }
  insertNewSubCategory(subCategory: Subcategory): Observable<Subcategory> {
    return this.httpClient
      .post<Subcategory>(
        `${environment.BAseApiURL}/subcategories`,
        JSON.stringify(subCategory),
        this.httpHeaders
      )
      .pipe(
        retry(3),
        catchError((error) => {
          console.error('An error occurred:', error);

          // You can customize this error handling based on your requirements
          if (error instanceof HttpErrorResponse) {
            // Handle HTTP errors (e.g., 404 Not Found, 500 Internal Server Error)
            console.error(`HTTP Error: ${error.status}`);
          } else if (error instanceof Error) {
            // Handle other errors (e.g., client-side errors)
            console.error('Client-side error:', error.message);
          } else {
            // Handle other types of errors
            console.error('An unexpected error occurred:', error);
          }

          // Rethrow the error to be caught by the subscriber
          return throwError(() => error);
        })
      );
  }
}
