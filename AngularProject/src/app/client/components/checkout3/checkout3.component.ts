import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OrderService } from '../../order.service';
import { Order } from 'src/app/shared/interfaces/order';
import { CartItem } from 'src/app/shared/interfaces/cartItem';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LightOrder } from 'src/app/shared/interfaces/lightOrder';
@Component({
  selector: 'checkout3',
  templateUrl: './checkout3.component.html',
  styleUrls: ['./checkout3.component.css']
})
export class Checkout3Component implements OnInit {

  @Output() public childEvent = new EventEmitter();

  private order:Order;
  apiLink = environment.apiLink;


  constructor(private httpClient : HttpClient,private orderService:OrderService) {
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


  updateTotalPrice(){
    this.orderService.calculeTotalPrice(this.order.cart);
    this.orderService.saveOrder(this.order);
  }

  deleteItem(item : CartItem){
    const index:number = this.order.cart.cartItems.indexOf(item);
    if(index>-1){
      this.order.cart.cartItems.splice(index,1);
    }
    this.orderService.calculeTotalPrice(this.order.cart);
    this.orderService.saveOrder(this.order);
  }





  //process
  onSubmit(form){


    let order =  this.orderService.loadOrder();
   
    
    let lightOrder = this.convertOrderToLightORder(order);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this.httpClient
    .post(this.apiLink+"/main/addOrder",lightOrder, httpOptions)
    .subscribe((data : boolean) => {
      if(data == true) 
        alert('sent with success')
      else {
        alert("no no")
      }
    })
    //process api ect ....
    // alert("ok you'r done here !")


    //testing body post


   /**
    * 
    * 
    * 
    * 
    * 
    * 
    
    loginProcess(loginForm){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.httpClient
    .post(this.apiLink+"loginProcess", loginForm.value, httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
    .subscribe((data : User) => {
      if(data == null) 
        this.loginError = true;
      else {
        sessionStorage.setItem("user",JSON.stringify(data));
        this.redirect(data.type);
      }
    })
  }
    
  
  */



  


  }


  
  convertOrderToLightORder(order:Order):LightOrder{

    let lightOrder:LightOrder={
      lightCart:{lightItems:Array(),totalPrice:order.cart.totalPrice},
      clientUsername:order.clientUsername,
      deliveryMethod:order.deliveryMethod,
      paymentMethod:order.paymentMethod
    };

    //pushing only produt's id instead of the whole product
    order.cart.cartItems.forEach(cartItem => {
      lightOrder.lightCart.lightItems.push({
          id:cartItem.product.id,
          quantity:cartItem.quantity})
    });

    return lightOrder;

  }

















}
