import { TransformResponseInterceptor } from './transform-response.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export * from './auth.interceptor';
export * from './transform-response.interceptor';


export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TransformResponseInterceptor, multi: true },
  ];