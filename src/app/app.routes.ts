import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const ROUTES_ROOT: Routes = [
	{
		path: '',
		component: HomePageComponent
	},
	{
		path: 'character/:id',
		loadComponent: () => import('./pages/character-page/character-page.component')
	}
];
