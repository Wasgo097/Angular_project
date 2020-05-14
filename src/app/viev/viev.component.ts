import { Component, OnInit, Injectable } from '@angular/core';
@Component({
  selector: 'app-viev',
  templateUrl: './viev.component.html',
  styleUrls: ['./viev.component.css']
})
@Injectable()
export class VievComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}
  tiles: boolean = true;
  table() {
    this.tiles = false;
  }
  tiless() {
    this.tiles = true;
  }
  getinfo(str: string) {
    document.getElementById("mess").textContent = str;
  }
  new_hero(){
    
  }
}