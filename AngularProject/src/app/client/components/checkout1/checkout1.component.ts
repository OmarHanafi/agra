import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OrderService } from '../../order.service';
import { Order } from 'src/app/shared/interfaces/order';

@Component({
  selector: 'checkout1',
  templateUrl: './checkout1.component.html',
  styleUrls: ['./checkout1.component.css']
})
export class Checkout1Component implements OnInit {


  @Output() public childEvent = new EventEmitter();

  private delivery:String;
  private disableButton:boolean;
  private order:Order;


  constructor(private orderService:OrderService) {
    this.order= this.orderService.loadOrder();
    if(this.order.deliveryMethod==""){
      console.log("got it empty but not undefined")
      this.disableButton=true;
    }
    else{
      this.delivery=this.order.deliveryMethod;
    }
   }
   activate(){
     this.disableButton=false;
   }


   
   ngOnInit() {
  }

  conso(v){
    console.log(v);
  }

  onSubmit(form){
    this.orderService.addDeliveryToOrder(form.value.delivery);
    this.fireNext();
  }

  fireNext(){
    this.childEvent.emit('2');
  }



}
