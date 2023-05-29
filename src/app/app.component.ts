import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { ContainerModule } from './container/container.module';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ContainerModule],
	template: `<app-container></app-container>`
})
export class AppComponent {
	constructor() {
		console.log(environment.valor1);
	}
}
