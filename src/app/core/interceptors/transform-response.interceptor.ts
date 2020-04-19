import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,finalize } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class TransformResponseInterceptor implements HttpInterceptor {
  count = 0;
  constructor(private spinner: NgxSpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.show()
    this.count++;
    return next.handle(req).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          console.log('response transformed')
            return event.clone();
        }
      }),finalize(
        () => {
          this.count--;
          if ( this.count == 0 ) this.spinner.hide ()
        }
      )
    );
  }
}
