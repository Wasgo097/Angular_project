import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    console.log(form);
    const credentials = JSON.stringify(form.value);
    this.http.post("https://localhost:44365/api/Authorization", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      console.log(token);
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/heroes"]);
    }, err => {
      this.invalidLogin = true;
    });
  }
  logOut() {
    localStorage.removeItem("jwt");
 }
}
