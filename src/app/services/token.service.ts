import { Injectable, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  cookieService = inject(CookieService);

  getToken(): string {
    return this.cookieService.get(environment.tokenName);
  }

  saveToken(newToken: string) {
    this.cookieService.set(environment.tokenName, newToken);
  }

  removeToken() {
    this.cookieService.delete(environment.tokenName);
  }
}
