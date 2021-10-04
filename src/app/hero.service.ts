import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  //Este es el provider
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  getHero(id: number): Observable<Hero> {

    const hero = HEROES.find(h => h.id === id)!;
    const heroTester = HEROES.find(h => h.id === id);

    console.log(`function with ! ${JSON.stringify(hero)}`);
    console.log(`function without ! ${JSON.stringify(heroTester)}`);

    this.messageService.add(`HeroService: fetched hero id=${id}`);

    return of(hero);
  }
}
