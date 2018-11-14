import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-clienthome',
  templateUrl: './clienthome.component.html',
  styleUrls: ['./clienthome.component.css']
})

export class ClientHomeComponent implements OnInit {

  navbarIdentifier : String = "home";

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    
  }

}
