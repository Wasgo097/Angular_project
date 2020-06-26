import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }
  canActivate() {
    const token = localStorage.getItem("jwt");
    //onsole.log("auth service "+token);
    if (token && !this.jwtHelper.isTokenExpired(token)){
      //console.log("true");
      return true;
    }
    //console.log("false");
    this.router.navigate([""]);
    return false;
  }
  isAdmin(){
    let role:string;
    role=localStorage.getItem("role");
    return role=="admin";
  }
}