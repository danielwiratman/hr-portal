import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';
import { CanActivateFn } from '@angular/router';
import { LoginResponse } from '../models/login-response.model';
import { User, UserSidebarInfo } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  cookieService = inject(CookieService);
  tokenService = inject(TokenService);

  login(email: string, password: string): Observable<LoginResponse> {
    this.tokenService.removeToken();

    const url = environment.usersApi + '/login';
    const body = new FormData();
    body.append('email', email);
    body.append('password', password);

    return this.http.post<LoginResponse>(url, body).pipe(
      map((res) => {
        this.tokenService.saveToken(res.accesstoken);
        return res;
      })
    );
  }

  isLoggedIn(): Observable<boolean> {
    const url = environment.usersApi + '/token-check';
    return this.http.get<{ detail: string; message: string }>(url).pipe(
      map((res) => res.message === 'valid'),
      catchError((err) => of(false))
    );
  }

  logout() {
    this.tokenService.removeToken();
  }

  getUserId(): number {
    const token = this.tokenService.getToken();
    const jwt: { id: number; exp: number; iat: number } = jwtDecode(token);
    return jwt.id;
  }

  getUser(): Observable<User> {
    const id = this.getUserId();
    const url = environment.usersApi + '/' + id;
    return this.http.get<User>(url);
  }

  getUserSidebarInfo(): Observable<UserSidebarInfo> {
    return this.getUser().pipe(
      map((user) => {
        return {
          name: user.display_name,
          photo: user.photo,
          division: user.division,
        };
      })
    );
  }
}
