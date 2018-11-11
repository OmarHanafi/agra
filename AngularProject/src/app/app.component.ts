import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'AngularProject';

  
  constructor() { }
  
  ngOnInit() {
     
  }





=======

  loginError : boolean = false;

  constructor(private httpClient : HttpClient){}

  loginProcess(loginForm){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.httpClient
    .post('http://localhost:8080/Agra-project/home', loginForm.value, httpOptions)
    .subscribe((data : User) => {
      if(data == null) 
        this.loginError = true;
      else {
        
      }
    });
  }
>>>>>>> 6867cb2e564f57e8da679659489d32bda0830c54

}
