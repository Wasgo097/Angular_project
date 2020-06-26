import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/serv.service';
import { AuthService } from '../service/authservice';
@Component({
  selector: 'app-hero-tile',
  templateUrl: './hero-tile.component.html',
  styleUrls: ['./hero-tile.component.css']
})
export class HeroTileComponent implements OnInit {
  @Input()
  public hero:Hero;
  public role:boolean;
  constructor(private service:HeroService,private authservice:AuthService) { }
  ngOnInit(): void {
    this.role=this.authservice.isAdmin();
  }
}
