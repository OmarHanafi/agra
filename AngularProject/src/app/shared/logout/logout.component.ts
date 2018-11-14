import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  template: ``,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor() {
    this.logout();
  }

  logout(){
    sessionStorage.removeItem("user");
    window.location.href = "login";
  }

  ngOnInit() {
  }

}
