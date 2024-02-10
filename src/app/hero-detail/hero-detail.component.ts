import { Component } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent {
  hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.heroService.updateHero(this.hero!).subscribe(() => this.goBack());
  }
}
