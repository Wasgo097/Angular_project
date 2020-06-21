import { Component, OnInit, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viev',
  templateUrl: './viev.component.html',
  styleUrls: ['./viev.component.css']
})
@Injectable()
export class VievComponent implements OnInit {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {}
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
  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
  public logOut = () => {
    localStorage.removeItem("jwt");
  }
}