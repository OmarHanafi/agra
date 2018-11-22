import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'clientnavbar',
  templateUrl: './clientnavbar.component.html',
  styleUrls: ['./clientnavbar.component.css']
})
export class ClientNavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  redirect(categ : number){
    console.log("choisis numero : "+categ);
    this.router.navigate(["client/category",categ]);


  }


}
