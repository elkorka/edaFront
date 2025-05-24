import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';

export const appHttpInterceptor: HttpInterceptorFn = (req:HttpRequest<unknown>, next: HttpHandlerFn):Observable<HttpEvent<unknown>> => {
  const authservice : AuthService = inject(AuthService);
  if (!req.url.includes("/auth/login")){
      let newRequest: HttpRequest<unknown> =req.clone({
        headers : req.headers.set('Authorization','Bearer '+authservice.accessToken)
        //setHeaders : { Authorization : `Bearer ${authservice.accessToken}`}
      });
      return next(newRequest);
  }else {
      return next(req);
  }

};
