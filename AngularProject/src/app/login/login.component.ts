import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { User } from '../shared/interfaces/user';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
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
    .pipe(
      catchError(this.errorHandler)
    )
    .subscribe((data : User) => {
      if(data == null) 
        this.loginError = true;
      else {
        sessionStorage.setItem("user",JSON.stringify(data));
        this.redirect(data.type);
      }
    })
  }
  errorHandler(error : HttpErrorResponse){ 
    alert("Server Error : "+error.message);
    return throwError( error.message || 'Server Error ! ') ;
  }

  redirect(usertype : number){
    if(usertype == 0)
      this.router.navigate(["admin"]);
    else if (usertype == 3)
      this.router.navigate(["client"]);
  }

  ngOnInit(){
    document.body.style.backgroundImage = "url('/assets/img/background.jpg')";
    document.body.style.backgroundSize =  "100%"
  
  }

  ngOnDestroy(){
    document.body.style.backgroundImage = "none";
  }

}