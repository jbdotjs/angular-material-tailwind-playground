import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      Authorization: 'David'
    })
    const params = new HttpParams().append('userId', '10');

    const clone = req.clone({
      headers: headers
    });

    return next.handle(clone).pipe(retry(2), catchError(this.errorHandler));
  }


  errorHandler(err: HttpErrorResponse) {
    console.log('Errrr', err)
    return throwError(err)
  }
}
