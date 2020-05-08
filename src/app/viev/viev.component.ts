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
}
export class Hero {
  public id: number;
  public nick: string;
  public img: string;
  public prof: string;
  constructor(id: number, nick: string, img: string, prof: string) {
    this.id = id;
    this.nick = nick;
    this.img = img;
    this.prof = prof;
  }
  description(): string {
    return "Id : " + this.id + " | Nick: " + this.nick + " | Profesja: " + this.prof;
  }
}