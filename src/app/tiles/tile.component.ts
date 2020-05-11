import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { VievComponent } from '../viev/viev.component';
import { HeroService } from '../service/serv.service';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  public heroes:Hero[];
  @Output()
  public info = new EventEmitter<string>();
  constructor(private viev:HeroService) { }
  ngOnInit(): void {
    this.viev.cast.subscribe(her=>this.heroes=her);
   }
  send(str: string) {
    this.info.emit(str);
  }
}
