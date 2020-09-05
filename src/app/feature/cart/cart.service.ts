import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CartService {

  constructor(private httpClient: HttpClient) { }

  getCartList(): Observable<any> {
    return this.httpClient.get('/users')
    // return this.httpClient.get('/users');
  }
}
