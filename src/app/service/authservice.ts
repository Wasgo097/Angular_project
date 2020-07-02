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
    console.log("przejscie");
    if (token && !this.jwtHelper.isTokenExpired(token)){
      //console.log("true");
      return true;
    }
    //console.log("false");
    this.router.navigate([""]);
    return false;
  }
  isAdmin(){
    //console.log("admin");
    const role=localStorage.getItem("role");
    if(role=="admin"){
        return true;
    }
    this.router.navigate(["/heroes"]);
    return false;
  }
  isAdminwithoutroute(){
    //console.log("admin wr");
    const role=localStorage.getItem("role");
    if(role=="admin"){
        return true;
    }
    return false;
  }
}