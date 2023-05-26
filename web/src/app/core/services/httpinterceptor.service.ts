import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(!req.url.endsWith('login')){

<<<<<<< HEAD
      const token: string | null = localStorage.getItem('token');
  
      let request = req;
  
=======
    let request = req;

    if(!req.url.endsWith("login")){
>>>>>>> 7-fe013-pagina-restaurantes-admin-y-propietario
      if (token) {
        request = req.clone({
          setHeaders: {
            authorization: `Bearer ${ token }`
          }
        });
      }
  
<<<<<<< HEAD
      return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
  
          if (err.status === 401) {
            this.router.navigateByUrl('/login');
          }
  
          return throwError( err );
  
        })
      );
    }
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/login');
        }

        return throwError( err );

      })
    );

=======
    }
    return next.handle(request).pipe(
        catchError((err: HttpErrorResponse) => {
  
          if (err.status === 401) {
            this.router.navigateByUrl('/login');
          }
  
          return throwError( err );
  
        })
      );
>>>>>>> 7-fe013-pagina-restaurantes-admin-y-propietario
  }

}
