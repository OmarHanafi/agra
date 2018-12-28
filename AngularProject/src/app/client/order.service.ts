import { Injectable } from '@angular/core';
import { Product } from '../shared/interfaces/product';
import { CartItem } from '../shared/interfaces/cartItem';
import { Cart } from '../shared/interfaces/cart';
import { Order } from '../shared/interfaces/order';
import { User } from '../shared/interfaces/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CustomerOrder } from '../shared/interfaces/customerOrder';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiLink = environment.apiLink;

  

  constructor(private httpClient : HttpClient) { }



  getCustomerOrders():Observable<CustomerOrder[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    let user : User = <User> JSON.parse(sessionStorage.getItem("user"));
    return this.httpClient
    .post<CustomerOrder[]>(this.apiLink+"/main/orders",user, httpOptions)
    
    
  }





  //after checkout create and save and order from the cart
  createOrder(){
    let cartDetail = this.loadCart();

    let user : User = <User> JSON.parse(sessionStorage.getItem("user"));
    let order:Order={cart:cartDetail,
      clientUsername:user.username,
      deliveryMethod:"",
      paymentMethod:""};
    this.saveOrder(order);
  }

  addDeliveryToOrder(deliveryMethod:String){
    let order = this.loadOrder();
    order.deliveryMethod=deliveryMethod;
    this.saveOrder(order);
  }

  addPaymentToOrder(paymentMethod:String){

    console.log("adding payment to the order ...")
    let order = this.loadOrder();
    order.paymentMethod=paymentMethod;
    console.log(order)
    this.saveOrder(order);
  }

  
  saveOrder(order){
    sessionStorage.setItem("order",JSON.stringify(order));
  }
  loadOrder():Order{
    let orderInSession : Order = <Order> JSON.parse(sessionStorage.getItem("order"));
    return orderInSession;
  }


  //give an cart, ill store it in the session
  saveCart(cart:Cart){
    sessionStorage.setItem("cart",JSON.stringify(cart));
  }

  //check the session and return me the cart (if not there create one)
  loadCart():Cart{
    let cartDetail : Cart=null;
    let cartInSession : Cart = <Cart> JSON.parse(sessionStorage.getItem("cart"));
    if(cartInSession ==null ){
      let cartItems : CartItem[] =Array();
      cartDetail  ={cartItems:cartItems,totalPrice:0};
    }
    else
      cartDetail=cartInSession;

    return cartDetail;
  }

  //give an cart, I calculate the total and return it :)
  calculeTotalPrice(cart : Cart):void{
    if(cart==null){
      return;
    }
    else{
      cart.totalPrice=0;
      cart.cartItems.forEach(item => {
      cart.totalPrice+=item.quantity*item.product.price;
      });
    }
  }

  //give an item, I ill add it to the cart then save
  addToCart(newProduct : Product){
    let newItem : CartItem = {product : newProduct,quantity : 1};
    let cart : Cart = this.loadCart();
    this.addOrIncrement(cart,newItem);
    this.saveCart(cart);
  }

  //add if not existing, increment his quantity if exist
  addOrIncrement(cart : Cart,cartItem : CartItem){
    let alreadyExist = false;
    for(let item of cart.cartItems){
      if(item.product.id==cartItem.product.id)
      {
        item.quantity++;
        alreadyExist=true;
        break;
      }
    }
    if(alreadyExist==false)
        cart.cartItems.push(cartItem);  
  }










}
