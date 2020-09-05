import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

export const API_URL =  environment.api_url;


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const authReq = req.clone({
      setHeaders: { 'Content-Type': 'application/json' },
      url : `${API_URL}${req.url}`
    });

    console.log(`HTTP: Adding headers`);
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
