import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export function isLoggedInGuard(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> {
  const router = inject(Router);
  const auth = inject(AuthService);

  // Check if user is logged in through token-check,
  // if user is not logged in then navigate to /login endpoint,
  // else it will get userInfo to check user division,
  // if user is staff, go to /staff endpoint, else it will go to admin (This will change)
  // if the route the user is visiting not equal to their divsion, then redirect to login

  return auth.isLoggedIn().pipe(
    switchMap((loggedIn) => {
      if (!loggedIn) {
        router.navigate(['/login']);
        return of(false);
      }
      return auth.getUserSidebarInfo().pipe(
        map((user) => {
          user.division = user.division === 'staff' ? 'staff' : 'admin';
          if (next.url[0].path !== user.division) {
            router.navigate(['/login']);
          }
          return true;
        })
      );
    })
  );
}

export function noLoginIfAuthenticatedGuard(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> {
  const router = inject(Router);
  const auth = inject(AuthService);

  // Check if user is logged in through token-check,
  // if user is not logged in then guard returns true and user able to visit login,
  // else it will get userInfo to check user division,
  // if user is staff, go to /staff endpoint, else it will go to admin (This will change)
  // if the route the user is visiting not equal to their divsion, then redirect to login

  return auth.isLoggedIn().pipe(
    switchMap((loggedIn) => {
      if (!loggedIn) {
        return of(true);
      }
      return auth.getUserSidebarInfo().pipe(
        map((user) => {
          switch (user.division) {
            case 'staff':
              router.navigate(['/staff']);
              break;
            default:
              router.navigate(['/admin']);
          }
          return false;
        })
      );
    })
  );
}
