import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

/** Guard for authorization page */
@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuth$()
      .pipe(
        map(isAuth => {
          if (isAuth) {
            void this.authService.doAfterAuth();
            return true;
          }
          return true;
        }),
      );
  }

}
