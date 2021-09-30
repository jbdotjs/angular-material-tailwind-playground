import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {

  constructor(private http: HttpClient) {
  }

  getData() {
    // const headers = new HttpHeaders({
    //   name: 'David'
    // })
    // const params = new HttpParams().append('userId', '10')

    return this.http.get('https://jsonplaceholder.typicode.com/postsss',
      // { headers: headers, params: params }
    )
    // .pipe(retry(2));
  }


}

// export interface Data {
//   id: number
//   title: string
//   body: string
//   userId: number
// }
