import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DatePipe } from '@angular/common';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation()),
              provideHttpClient(),
              provideAnimationsAsync(),
              DatePipe,
              SearchFilterPipe, provideAnimationsAsync()]
};
