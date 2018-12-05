import { Injectable } from '@angular/core';
import { Product } from '../shared/interfaces/product';
import { CartItem } from '../shared/interfaces/cartItem';
import { CartDetail } from '../shared/interfaces/cartDetail';
import { Order } from '../shared/interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }



  //after checkout create and save and order from the cart
  createOrder(){
    let cartDetail = this.loadCart();
    let order:Order={cartDetail:cartDetail,
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
    let order = this.loadOrder();
    order.paymentMethod=paymentMethod;
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
  saveCart(cart:CartDetail){
    sessionStorage.setItem("cart",JSON.stringify(cart));
  }

  //check the session and return me the cart (if not there create one)
  loadCart():CartDetail{
    let cartDetail : CartDetail=null;
    let cartInSession : CartDetail = <CartDetail> JSON.parse(sessionStorage.getItem("cart"));
    if(cartInSession ==null ){
      let cartItems : CartItem[] =Array();
      cartDetail  ={cartItems:cartItems,totalPrice:0};
    }
    else
      cartDetail=cartInSession;

    return cartDetail;
  }

  //give an cart, I calculate the total and return it :)
  calculeTotalPrice(cart : CartDetail):void{
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
    let cart : CartDetail = this.loadCart();
    this.addOrIncrement(cart,newItem);
    this.saveCart(cart);
  }

  //add if not existing, increment his quantity if exist
  addOrIncrement(cart : CartDetail,cartItem : CartItem){
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
