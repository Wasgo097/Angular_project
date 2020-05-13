import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-one-hero',
  templateUrl: './one-hero.component.html',
  styleUrls: ['./one-hero.component.css']
})
export class OneHeroComponent implements OnInit {
  @Input()
  public hero:Hero;
  constructor() { }
  ngOnInit(): void {
  }

}
