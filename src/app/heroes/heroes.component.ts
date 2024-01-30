import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  selectedHero: Hero | undefined;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  heroes = HEROES;
}
