import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  selectedHero?: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  heroes?: Hero[];

  constructor(private heroService: HeroService) {}

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit() {
    this.getHeroes();
  }
}
