import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';

declare function jsInit(): any;

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})

export class AdminHomeComponent implements OnInit {

  user : User;

  constructor() {
    this.user = <User> JSON.parse(sessionStorage.getItem("user"));
  }

  ngAfterViewInit(){
    jsInit();           // Loading the template's js files
  }

  ngOnInit() {
  }

}
