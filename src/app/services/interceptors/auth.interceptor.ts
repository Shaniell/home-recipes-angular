import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private user: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log("AuthInterceptor Interceptor");
    request = request.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${this.user.user.token}`,
      },
    });


    return next.handle(request);
  }
}
