import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Jean' },
      { id: 12, name: 'Veka' },
      { id: 13, name: 'Paloma' },
      { id: 14, name: 'Matías' },
      { id: 15, name: 'Yohe' },
      { id: 16, name: 'Alex' },
      { id: 18, name: 'Virginia' },
      { id: 19, name: 'Jose' },
      { id: 20, name: 'Marta' },
      { id: 21, name: 'Jorge' },
    ]
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}