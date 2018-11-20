import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  loginError : boolean = false;

  constructor(private httpClient : HttpClient, private router : Router){ }

  loginProcess(loginForm){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.httpClient
    .post('http://localhost:8080/Agra-project/loginProcess', loginForm.value, httpOptions)
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
