import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/serv.service';
import { AuthService } from '../service/authservice';
import { Csvexporter } from '../service/csvexporter';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public form: FormGroup;
  public heroes:Hero[]=[];
  public role:boolean;
  @Output()
  public info=new EventEmitter<string>();
  constructor(private fb: FormBuilder,private service:HeroService,private authservice:AuthService,private exporter:Csvexporter) { 
    this.form = this.fb.group({
      sort: new FormControl(null),
      filtr: new FormControl(null)
    });}
  ngOnInit(): void {
    let sort=localStorage.getItem("sort");
    let filtr=localStorage.getItem("filtr");
    this.service.getHeroes(sort,filtr).subscribe(her=>this.heroes=her);
    this.role=this.authservice.isAdmin();
  }
  send(str:string){
    this.info.emit(str);
  }
  description(her:Hero): string {
    return "Id : " + her.id + " | Nick: " + her.nick + " | Profesja: " + her.prof;
  }
  downloadCSV(){
    this.exporter.downloadCSV(this.heroes);
  }
  onSubmit(){
    //console.log("sort i filtr");
    let sort=this.form.controls['sort'].value;
    let filtr=this.form.controls['filtr'].value;
    localStorage.setItem("sort",sort);
    localStorage.setItem("filtr",filtr);
    this.service.getHeroes(filtr,sort).subscribe(her=>this.heroes=her);
  }
  public clear(){
    localStorage.removeItem("sort");
    localStorage.removeItem("filtr");
    this.service.getHeroes().subscribe(her=>this.heroes=her);
  }
}