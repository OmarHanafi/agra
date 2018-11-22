import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/interfaces/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginError : boolean = false;
  apiLink = environment.apiLink;

  constructor(private httpClient : HttpClient, private router : Router){ }

  loginProcess(loginForm){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.httpClient
    .post(this.apiLink+"loginProcess", loginForm.value, httpOptions)
    .subscribe((data : User) => {
      if(data == null) 
        this.loginError = true;
      else {
        sessionStorage.setItem("user",JSON.stringify(data));
        this.redirect(3);
      }
    });
  }

  redirect(usertype : number){
    if(usertype == 3)
      this.router.navigate(["client"]);
  }

  ngOnInit(){
    document.body.style.backgroundImage = "url('/assets/img/background.jpg')";
  }

  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }

}
