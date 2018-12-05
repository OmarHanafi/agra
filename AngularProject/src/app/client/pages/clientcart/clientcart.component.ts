import { Component, OnInit,EventEmitter ,OnChanges, SimpleChange, AfterContentInit, Output, ViewChild } from '@angular/core';
import { CartDetail } from 'src/app/shared/interfaces/cartDetail';
import { Product } from 'src/app/shared/interfaces/product';
import { CartItem } from 'src/app/shared/interfaces/cartItem';
import { OrderService } from '../../order.service';
import { ClientNavbarComponent } from '../../components/clientnavbar/clientnavbar.component';
import { Router,RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-clientcart',
  templateUrl: './clientcart.component.html',
  styleUrls: ['./clientcart.component.css']
})
export class ClientcartComponent implements OnInit {


  @ViewChild(ClientNavbarComponent)
  private child: ClientNavbarComponent;





  //public eventEmitter = new EventEmitter();


  public nbItems:number=0;
  private order : CartDetail;
  

  constructor(private orderService : OrderService,private router : Router) { 

    this.order=this.orderService.loadCart();
    this.orderService.calculeTotalPrice(this.order);
    this.nbItems=this.order.cartItems.length;
    
}

  ngOnInit() {
  }


  onSubmit(form){


    if(this.order.cartItems.length>0){
      this.checkout();
    }
    //process the form 
    //save in the session
    
  }



  checkout(){
    this.updateBasket();
    this.orderService.createOrder();
    this.router.navigate(['client/checkout']);
  }


  //here when i need to change the navbar item number!
  updateBasket(){
    this.orderService.saveCart(this.order);
    //here i need to reload the navbar component 
    this.child.load();



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
