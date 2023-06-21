import { Injectable } from '@angular/core';
import { AuthFormModel } from '../models/auth-form-model';
import { Observable, of, throwError } from 'rxjs';
import { RouterLinks } from '../constants/router-links';
import { Router } from '@angular/router';
import { CookieService } from './cookie.service';

/** data for imitation registered user */
const DEFAULT_REGISTERED_USER = {
  login: 'user',
  password: '12345678',
}

const AUTH_DATA_IS_NOT_VALID = 'Login or password is incorrect';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userId: string | undefined;

  constructor(
    private readonly router: Router,
    private readonly cookieService: CookieService,
  ) {
    this.createUserId();
  }

  private createUserId(): void {
    this.userId = `_${Math.random().toString(36).substring(2, 9)}`;
  }

  public login$(form: AuthFormModel): Observable<string> {
    const { login, password } = form;
    if (login === DEFAULT_REGISTERED_USER.login && password === DEFAULT_REGISTERED_USER.password) {
      this.cookieService.setCookie('IS_AUTH', this.userId as string)
      return of(this.userId as string)
    }
    return throwError(() => AUTH_DATA_IS_NOT_VALID);
  }

  public isAuth$(): Observable<boolean> {
    const isAuth = !!this.cookieService.getCookie('IS_AUTH');
    return of(isAuth);
  }

  public doAfterAuth(): Promise<boolean> {
    return this.navigateTo(RouterLinks.HOME);
  }

  public navigateToAuth(): Promise<boolean> {
    return this.navigateTo(RouterLinks.SIGN_IN);
  }

  private navigateTo(link: string): Promise<boolean> {
    return this.router.navigate([link]);
  }
}
