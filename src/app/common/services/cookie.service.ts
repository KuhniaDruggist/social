import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  public getCookie(name: string): string | undefined {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  public setCookie(name: string, value: string, options: { [key: string]: unknown } = {}) {
    options = {
      path: '/',
      // optionally other added defaults
      ...options
    };

    if (options['expires'] instanceof Date) {
      options['expires'] = options['expires'].toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }

  public deleteCookie(name: string): void {
    this.setCookie(name, "", {
      'max-age': -1
    })
  }
}
