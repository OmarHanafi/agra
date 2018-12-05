import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clientcheckout',
  templateUrl: './clientcheckout.component.html',
  styleUrls: ['./clientcheckout.component.css']
})
export class ClientcheckoutComponent implements OnInit {


  private checkoutState:number=2;





  constructor() {
    this.checkoutState=1;
   }

  ngOnInit() {
    
  }






}
