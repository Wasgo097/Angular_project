import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/serv.service';
import { AuthService } from '../service/authservice';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public heroes:Hero[]=[];
  public role:boolean;
  @Output()
  public info=new EventEmitter<string>();
  constructor(private service:HeroService,private authservice:AuthService) { }
  ngOnInit(): void {
    //this.service.cast.subscribe(her=>this.heroes=her);
    this.service.getHeroes().subscribe(her=>this.heroes=her);
    this.role=this.authservice.isAdmin();
  }
  send(str:string){
    this.info.emit(str);
  }
  description(her:Hero): string {
    return "Id : " + her.id + " | Nick: " + her.nick + " | Profesja: " + her.prof;
  }
}