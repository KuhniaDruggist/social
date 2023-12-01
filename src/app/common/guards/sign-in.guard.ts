import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from "../services/auth.service";

/** Guard for login page */
@Injectable({
  providedIn: 'root',
})
export class SignInGuard  {

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
