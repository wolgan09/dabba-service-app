import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<any> {
    return this.httpClient.get('/users')
    // return this.httpClient.get('/users');
  }
}
