import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch, withInterceptors, withJsonpSupport } from '@angular/common/http';
import { importProvidersFrom, BootstrapOptions } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authInterceptor } from './app/interceptors/auth.interceptor';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
  ],
});
// bootstrapApplication(AppComponent, {
//   providers: [
//       provideHttpClient(
//           withInterceptors([authInterceptor]),
//           withLegacyInterceptors(),
//       ),
//       {
//           provide: HTTP_INTERCEPTORS,
//           useClass: LegacyInterceptor,
//           multiple: true,
//       },
//   ]
// });
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor]),
    ),
  ]
});