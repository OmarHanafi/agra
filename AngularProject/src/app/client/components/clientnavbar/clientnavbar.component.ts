import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetail } from 'src/app/shared/interfaces/orderDetail';
import { OrderService } from '../../order.service';


@Component({
  selector: 'clientnavbar',
  templateUrl: './clientnavbar.component.html',
  styleUrls: ['./clientnavbar.component.css']
})
export class ClientNavbarComponent implements OnInit {

  public nbItems : number;

  constructor(private orderService : OrderService) {

    this.load();

    

    }
      

   
    load(){
      let order = this.orderService.loadOrder();
      this.nbItems=order.cartItems.length;
    }

  ngOnInit() {
  }






}
