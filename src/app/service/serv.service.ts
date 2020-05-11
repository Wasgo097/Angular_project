import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes = new BehaviorSubject<Hero[]>([
    new Hero(1, 'ProWoj', '../../assets/av1.jpg', 'Wojownik'),
    new Hero(2, 'Kox2020', '../../assets/av2.png', 'Wojownik'),
    new Hero(3, 'Szuriken15', '../../assets/av3.png', 'Ninja'),
    new Hero(4, 'Łap@11', '../../assets/av4.png', 'Sura'),
    new Hero(5, 'Distrojer90', '../../assets/av5.jpg', 'Sura'),
    new Hero(6, 'BuffEx1', '../../assets/av6.png', 'Szaman')
  ]);
  public cast = this.heroes.asObservable();
  constructor() { }
}
