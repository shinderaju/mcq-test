import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    if (tokenPayload.role !== expectedRole) {
      // this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
