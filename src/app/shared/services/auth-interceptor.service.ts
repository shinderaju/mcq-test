import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, tap, map } from 'rxjs/operators';
import { LocalstorageService } from './localstorage.service';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements  HttpInterceptor {
  constructor(
    public auth: AuthService,
    public router: Router,
    private localStorageService: LocalstorageService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.auth.getToken(),
        'Content-Type': 'application/json'
      }
    });
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              // localStorage.removeItem('token');
              // localStorage.removeItem('wishList');
              // localStorage.removeItem('vw-compare-data');

              // this.localStorageService.removeItem('token');
              // this.localStorageService.removeItem('wishList');
              // this.localStorageService.removeItem('vw-compare-data');
              this.router.navigate(['/login']);
            }
          }
        }
      )
    );
  }
}
