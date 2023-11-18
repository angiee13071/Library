import { HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('request', req.method, req.url);
  console.log('authInterceptor')

  if (req.url.startsWith('http://libraryapi.infometrika.net/api/')) {
    const headers = req.headers.set('Authorization', 'Bearer' + localStorage.getItem('refresh'));
    req = req.clone({
      headers
    });
  }

  return next(req).pipe(
    tap(resp => console.log('response', resp))
  );

}