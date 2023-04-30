import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  tokenService = inject(TokenService)
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.tokenService.getToken();
    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('x-access-token', `${authToken}`),
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
