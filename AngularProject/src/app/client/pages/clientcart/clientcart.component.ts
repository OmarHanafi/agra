import { Component, OnInit, OnChanges, SimpleChange, AfterContentInit } from '@angular/core';
import { OrderDetail } from 'src/app/shared/interfaces/orderDetail';
import { Product } from 'src/app/shared/interfaces/product';
import { CartItem } from 'src/app/shared/interfaces/cartItem';
import { OrderService } from '../../order.service';


@Component({
  selector: 'app-clientcart',
  templateUrl: './clientcart.component.html',
  styleUrls: ['./clientcart.component.css']
})
export class ClientcartComponent implements OnInit {

  private order : OrderDetail;
  //private cartItems : CartItem[];

  constructor(private orderService : OrderService) { 
    this.order=this.orderService.loadOrder();
    this.orderService.calculeTotalPrice(this.order);
}

  ngOnInit() {
  }



  updateBasket(){
    this.orderService.saveOrder(this.order);
  }


  //delete the item just in the view 
  deleteItem(item : CartItem){
    const index:number = this.order.cartItems.indexOf(item);
    if(index>-1){
      this.order.cartItems.splice(index,1);
    }
    this.orderService.calculeTotalPrice(this.order);
  }


  //update the price
  updateTotalPrice(){
    this.orderService.calculeTotalPrice(this.order);
  }



}
