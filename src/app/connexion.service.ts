import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import { Buffer } from 'buffer';
import { catchError, Observable, tap, throwError } from 'rxjs';

const OAUTH_CLIENT = 'testclient';
const OAUTH_SECRET = 'testpass';
const API_URL = 'http://localhost:4350/';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'withCredentials': 'true',
    Authorization: 'Basic ' + Buffer.from(OAUTH_CLIENT + ':' + OAUTH_SECRET).toString('base64')
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient) { }

  getHttpOptions() {
    return HTTP_OPTIONS;
  }

  getUrl(page: string) {
    return API_URL + page;
  }

  generateParams() {
    return new HttpParams();
  }

}
