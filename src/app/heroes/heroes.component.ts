import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

  // selectedHero?: Hero;

  heroes: Hero[] = [];

  // The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  // onSelect(hero: Hero): void {
  //   // this.selectedHero = hero;
  //   this.messageService.add(`Component says-> Selected hero is: ${hero.name}`)
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
}
