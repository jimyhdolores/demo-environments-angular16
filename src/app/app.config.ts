import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ROUTES_ROOT } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(ROUTES_ROOT), provideHttpClient(), provideAnimations()]
};
