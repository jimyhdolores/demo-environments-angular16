import { Component } from '@angular/core';
import { ContainerModule } from './container/container.module';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ContainerModule],
	template: `<app-container></app-container>`
})
export class AppComponent {}
