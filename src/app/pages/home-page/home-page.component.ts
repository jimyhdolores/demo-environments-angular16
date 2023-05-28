import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ICharacter } from '../../services/rick-and-morty-api.interface';
import { RickAndMortyApiService } from '../../services/rick-and-morty-api.service';

@Component({
	standalone: true,
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
	imports: [CommonModule, RouterModule, MatCardModule]
})
export class HomePageComponent implements OnInit {
	constructor(public pokeApiService: RickAndMortyApiService) {}
	characters: ICharacter[] = [];

	ngOnInit(): void {
		this.pokeApiService.getAllCharacter().subscribe((response) => {
			this.characters = response;
		});
	}
}
