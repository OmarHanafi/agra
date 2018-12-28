import { Cart } from "./cart";


export interface Order{
    cart:Cart,
    clientUsername:String,
    deliveryMethod:String,
    paymentMethod:String
}