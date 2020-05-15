import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/serv.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public heroes:Hero[]=[];
  @Output()
  public info=new EventEmitter<string>();
  constructor(private service:HeroService) { }
  ngOnInit(): void {
    //this.service.cast.subscribe(her=>this.heroes=her);
    this.service.getHeroes().subscribe(her=>this.heroes=her);
  }
  send(str:string){
    this.info.emit(str);
  }
  description(her:Hero): string {
    return "Id : " + her.id + " | Nick: " + her.nick + " | Profesja: " + her.prof;
  }
  delete(){
console.log("usun");
  }
}