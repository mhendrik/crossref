import { Injectable } from '@angular/core';
import { Observable, Subject, from, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL = 'https://api.crossref.org';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'X-Rate-Limit-Limit': '50',
      'X-Rate-Limit-Interval': '1s',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    }),
  };
  constructor(private http: HttpClient) { }
  // HttpClient API get() method => Fetch works list
  getWorks(): Observable<any> {
    return this.http
      .get<any>(this.apiURL + '/works?rows=100')
      .pipe(retry(1), catchError(this.handleError));
  }

    // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
