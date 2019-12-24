import { Injectable } from '@angular/core';
import {isNull} from "util";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  public getToken(): string {
    const token = localStorage.getItem('token');
    // const token = localStorage.getItem('token');
    if (isNull(token)) {
      return '';
    } else if (token.length > 0) {
      return token;
    } else {
      return '';
    }
  }
}
