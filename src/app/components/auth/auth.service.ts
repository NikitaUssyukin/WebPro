import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { config } from './config';
import { Tokens } from './tokens';

@Injectable()
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  constructor(private http: HttpClient) { }

  login(user: { name: string, password: string }): Observable<boolean> {
    return this.http.post<any>('${config.apiUrl}/auth', user)
      .pipe(
        tap(tokens => this.doLoginUser(user.name, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  private doLoginUser(name: string, tokens: Tokens) {
    this.loggedUser = name;
    this.storeTokens(tokens);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }


  /*
    private setSession(authResult) {

    }

    logout() {

    }

    public isLoggedIn() {

    }

    public isLoggedOut() {

    }

    getExpiration() {

    }

   */
}
