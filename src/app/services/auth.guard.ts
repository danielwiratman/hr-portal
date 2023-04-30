import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable, map, of, switchMap } from 'rxjs';
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

  return auth.isLoggedIn().pipe(
    switchMap((res) =>
      auth.getUserSidebarInfo().pipe(
        map((user) => {
          if (!res) {
            router.navigate(['/login']);
          }
          if (user.division !== 'staff') {
            user.division = 'admin';
          }
          if (next.url[0].path !== user.division) {
            router.navigate(['/login']);
          }
          return true;
        })
      )
    )
  );
}

export function noLoginIfAuthenticatedGuard(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> {
  const router = inject(Router);
  const auth = inject(AuthService);
  return auth.isLoggedIn().pipe(
    map((res) => {
      if (res) {
        router.navigate(['/admin']);
      }
      return !res;
    })
  );
}

// return auth.getUserSidebarInfo().pipe(
//   switchMap((user) =>
//     auth.isLoggedIn().pipe(
//       map((res) => {
//         console.log("resu", res);

//         if (res) {
//           switch (user.division) {
//             case 'admin':
//               router.navigate(['/admin']);
//               break;
//             default:
//               router.navigate(['/staff']);
//           }
//         }
//         return !res;
//       })
//     )
//   )
// );
