import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OrderService } from '../../order.service';
import { Order } from 'src/app/shared/interfaces/order';
import { CartItem } from 'src/app/shared/interfaces/cartItem';

@Component({
  selector: 'checkout3',
  templateUrl: './checkout3.component.html',
  styleUrls: ['./checkout3.component.css']
})
export class Checkout3Component implements OnInit {

  @Output() public childEvent = new EventEmitter();

  private order:Order;



  constructor(private orderService:OrderService) {
    this.order= this.orderService.loadOrder();
    
   }

  ngOnInit() {
  }

  firePrevious(){
    this.childEvent.emit('2')
  }
  fireFirst(){
    this.childEvent.emit('1')
  }

  onSubmit(form){


    let order =  this.orderService.loadOrder();
    console.log(order);
    //process api ect ....
   // alert("ok you'r done here !")
  }

  updateTotalPrice(){
    this.orderService.calculeTotalPrice(this.order.cartDetail);
    this.orderService.saveOrder(this.order);
  }

  deleteItem(item : CartItem){
    const index:number = this.order.cartDetail.cartItems.indexOf(item);
    if(index>-1){
      this.order.cartDetail.cartItems.splice(index,1);
    }
    this.orderService.calculeTotalPrice(this.order.cartDetail);
    this.orderService.saveOrder(this.order);
  }
}
