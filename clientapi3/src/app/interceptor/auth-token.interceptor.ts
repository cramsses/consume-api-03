import { HttpInterceptorFn } from '@angular/common/http';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {

  const authReq = req.clone({
    headers:req.headers.set('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjcmFtc3Nlc0pXVCIsInN1YiI6InRlc3QiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNzA5MzI1Mjk1LCJleHAiOjE3MTAxODkyOTV9.Dq3b55h6b6BCllt5sqSTcubn4lNqKJGl5XlwBcmcwchqX9IUU7BKqdIsJAF6B6H5UG-tDjvtvmoN89Z7Hm8aKQ')
  });

  return next(authReq);
};
