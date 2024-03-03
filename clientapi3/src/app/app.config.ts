import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { consolelogInterceptor } from './interceptor/consolelog.interceptor';
import { authTokenInterceptor } from './interceptor/auth-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withInterceptors(
      [consolelogInterceptor, authTokenInterceptor]
    )), 
    provideAnimationsAsync()
  ]
};
