import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url="https://localhost:44365/api/";
  // private heroes = new BehaviorSubject<Hero[]>([
  //   new Hero(1, 'ProWoj', '../../assets/av1.jpg', 'Wojownik'),
  //   new Hero(2, 'Kox2020', '../../assets/av2.png', 'Wojownik'),
  //   new Hero(3, 'Szuriken15', '../../assets/av3.png', 'Ninja'),
  //   new Hero(4, 'Łap@11', '../../assets/av4.png', 'Sura'),
  //   new Hero(5, 'Distrojer90', '../../assets/av5.jpg', 'Sura'),
  //   new Hero(6, 'BuffEx1', '../../assets/av6.png', 'Szaman')
  // ]);
  //public cast = this.getHeroes();
  constructor(private _http:HttpClient) { }
  public getHeroes():Observable<Hero[]>{
    return this._http.get<Hero[]>(this.url+'hero/');
  }
  public getHero(id:number):Observable<Hero>{
    return this._http.get<Hero>(this.url+'hero/'+id);
  }
  public addHero(hero:Hero):Observable<void>{
    return this._http.post<void>(this.url+'hero/',hero);
  }
  public updateMovie(id: number, hero:Hero): Observable<void> {
    return this._http.put<void>(this.url + 'hero/' + id, hero);
  }
  public deleteMovie(id: number): Observable<void> {
    return this._http.delete<void>(this.url + 'hero/' + id);
  }
}
