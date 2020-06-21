import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url="https://localhost:44365/api/";
  constructor(private _http:HttpClient) { }
  public getHeroes():Observable<Hero[]>{
    return this._http.get<Hero[]>(this.url+'heroes');
  }
  public getHero(id:number):Observable<Hero>{
    return this._http.get<Hero>(this.url+'heroes/'+id);
  }
  public addHero(hero:Hero):Observable<boolean>{
    return this._http.post<boolean>(this.url+'heroes/',hero);
  }
  public updateHero(id: number, hero:Hero):Observable<boolean>{
    return this._http.put<boolean>(this.url + 'heroes/' + id, hero);
  }
  public deleteHero(id: number):Observable<boolean>{
    return this._http.delete<boolean>(this.url + 'heroes/' + id);
  }
}