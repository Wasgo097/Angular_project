import { Injectable } from '@angular/core';
import { Hero } from '../viev/viev.component';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes = new BehaviorSubject<Hero[]>([
    /*{ id: 1, nick: 'ProWoj', img: '../../assets/av1.jpg', prof: 'Wojownik' },
    { id: 2, nick: 'Kox2020', img: '../../assets/av2.png', prof: 'Wojownik' },
    { id: 3, nick: 'Szuriken15', img: '../../assets/av3.png', prof: 'Ninja' },
    { id: 4, nick: 'Łapa11', img: '../../assets/av4.png', prof: 'Sura' },
    { id: 5, nick: 'Distrojer90', img: '../../assets/av5.jpg', prof: 'Sura' },
    { id: 6, nick: 'BuffEx1', img: '../../assets/av6.png', prof: 'Szaman' },*/
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
