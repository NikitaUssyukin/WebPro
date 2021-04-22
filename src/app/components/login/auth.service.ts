import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(name:string, password:string) {
    return this.http.post<User>('/api/login', {name, password})
  }

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
}
