import { HttpInterceptorFn } from '@angular/common/http';

export const consolelogInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request: '+req.url);
  return next(req);

};
