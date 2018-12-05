import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OrderService } from '../../order.service';
import { Order } from 'src/app/shared/interfaces/order';

@Component({
  selector: 'checkout2',
  templateUrl: './checkout2.component.html',
  styleUrls: ['./checkout2.component.css']
})
export class Checkout2Component implements OnInit {

  @Output() public childEvent = new EventEmitter();

  private order:Order;
  private payment:String;
  private disableButton:boolean;



  constructor(private orderService:OrderService) {
    this.order= this.orderService.loadOrder();
    if(this.order.paymentMethod==""){
      console.log("got it empty but not undefined")
      this.disableButton=true;
    }
    else{
      this.payment=this.order.paymentMethod;
    }
   }
   activate(){
     this.disableButton=false;
   }


  ngOnInit() {
  }


  onSubmit(form){
    this.orderService.addPaymentToOrder(form.value.payment);
    this.childEvent.emit('3')
  }
  firePrevious(form){
    this.orderService.addPaymentToOrder(form.value.payment);
    this.childEvent.emit('1')
  }



}
