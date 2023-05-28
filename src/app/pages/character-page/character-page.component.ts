import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IResponseCharacter } from '../../services/rick-and-morty-api.interface';
import { RickAndMortyApiService } from '../../services/rick-and-morty-api.service';

@Component({
	standalone: true,
	selector: 'app-character-page',
	templateUrl: './character-page.component.html',
	styleUrls: ['./character-page.component.scss'],
	imports: [CommonModule, MatCardModule]
})
export default class CharacterPageComponent implements OnInit {
	constructor(private _rickAndMortyApiService: RickAndMortyApiService, private _router: ActivatedRoute) {}

	character$!: Observable<IResponseCharacter>;

	ngOnInit(): void {
		const id = this._router.snapshot.params['id'] as number;
		this.character$ = this._rickAndMortyApiService.getCharacter(id);
	}
}
