import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.app-clientnavbar',
  templateUrl: './clientnavbar.component.html',
  styleUrls: ['./clientnavbar.component.css']
})
export class ClientNavbarComponent implements OnInit {

  @Input()
  activeNavbarIdentifier : String;

  constructor() { }

  isActive(navbarIdentifier) : String {
    let result : String = "";
    if(navbarIdentifier == this.activeNavbarIdentifier)
      result = "active";
    return result;
  }

  ngOnInit() {
  }

}
