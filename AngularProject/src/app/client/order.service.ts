import { Injectable } from '@angular/core';
import { Product } from '../shared/interfaces/product';
import { CartItem } from '../shared/interfaces/cartItem';
import { OrderDetail } from '../shared/interfaces/orderDetail';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }



  saveOrder(order:OrderDetail){
    sessionStorage.setItem("order",JSON.stringify(order));
  }


  //check the session and return me a order
  loadOrder():OrderDetail{
    let orderToReturn : OrderDetail=null;
    let ord : OrderDetail = <OrderDetail> JSON.parse(sessionStorage.getItem("order"));
    if(ord ==null ){
      let cartItems : CartItem[] =Array();
      orderToReturn  ={cartItems:cartItems,totalPrice:0};
    }
    else
      orderToReturn=ord;
    return orderToReturn;
  }


  //give an order, I calculate the total and return it :)
  calculeTotalPrice(order : OrderDetail):void{
    if(order==null){
      return;
    }
    else{
      order.totalPrice=0;
      order.cartItems.forEach(item => {
      order.totalPrice+=item.quantity*item.product.price;
      });
    }
  }




  


  //give an item, I ill add it to the cart then save
  addToCart(newProduct : Product){
    let newItem : CartItem = {product : newProduct,quantity : 1};
    let order : OrderDetail = this.loadOrder();
    this.addOrIncrement(order,newItem);
    this.saveOrder(order);
  }
  addOrIncrement(order : OrderDetail,cartItem : CartItem){
    let alreadyExist = false;
    for(let item of order.cartItems){
      if(item.product.id==cartItem.product.id)
      {
        item.quantity++;
        alreadyExist=true;
        break;
      }
    }
    if(alreadyExist==false)
        order.cartItems.push(cartItem);  
  }










}
