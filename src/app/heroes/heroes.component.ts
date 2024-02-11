import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  heroes?: Hero[];

  constructor(private heroService: HeroService) {}

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;

    this.heroService
      .addHero({ name } as Hero)
      .subscribe((hero) => this.heroes?.push(hero));
  }

  ngOnInit() {
    this.getHeroes();
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes?.filter((h) => h.id !== hero.id);

    this.heroService.deleteHero(hero).subscribe();
  }
}
