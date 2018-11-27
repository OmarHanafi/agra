import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetail } from 'src/app/shared/interfaces/orderDetail';


@Component({
  selector: 'clientnavbar',
  templateUrl: './clientnavbar.component.html',
  styleUrls: ['./clientnavbar.component.css']
})
export class ClientNavbarComponent implements OnInit {

  private isNull:boolean = true;
  private itemsNumber : number=0;

  constructor(private router : Router) {
    let order : OrderDetail = <OrderDetail> JSON.parse(sessionStorage.getItem("order"));
    if(order!=null){
      this.itemsNumber=order.cartItems.length;
      this.isNull=false;
    }
      

   }

  ngOnInit() {
  }






}
