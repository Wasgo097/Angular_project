import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
//import { VievComponent } from '../viev/viev.component';
import { HeroService } from '../service/serv.service';
import { Csvexporter } from '../service/csvexporter';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  public heroes:Hero[]=[];
  @Output()
  public info = new EventEmitter<string>();
  constructor(private service:HeroService,private exporter:Csvexporter) { }
  ngOnInit(): void {
    //console.log("zadanie");
    this.service.getHeroes().subscribe(her=>this.heroes=her);
   }
  send(str: string) {
    this.info.emit(str);
  }
  description(her:Hero): string {
    return "Id : " + her.id + " | Nick: " + her.nick + " | Profesja: " + her.prof;
  }
  downloadCSV(){
    this.exporter.downloadCSV(this.heroes);
  }
}
