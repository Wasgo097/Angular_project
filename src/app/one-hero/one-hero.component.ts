import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../service/serv.service';
import { AuthService } from '../service/authservice';
@Component({
  selector: 'app-one-hero',
  templateUrl: './one-hero.component.html',
  styleUrls: ['./one-hero.component.css']
})
export class OneHeroComponent implements OnInit {
  private id:number;
  public hero:Hero;
  public load:boolean=false;
  public role:boolean;
  constructor(private route: ActivatedRoute,private service:HeroService,private authservice:AuthService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {this.id = +params.get('id');});
    this.service.getHero(this.id).subscribe(hero=>{this.hero=hero;this.load=true;});
    this.role=this.authservice.isAdminwithoutroute();
  }
}
