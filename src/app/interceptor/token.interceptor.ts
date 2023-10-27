import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { NbAuthService } from '@nebular/auth';
import { Observable, from, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: NbAuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.authService.isAuthenticated().toPromise().then((authenticated) => {
      if (authenticated) {
        return this.authService.getToken().toPromise().then((token) => {
          const authRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
          return next.handle(authRequest).toPromise();
        });
      } else {
        return next.handle(request).toPromise();
      }
    })).pipe(
      mergeMap((result) => of(result))
    );
  }

}