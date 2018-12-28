import { LightCart } from "./lightCart";

export interface LightOrder{
    lightCart:LightCart,
    clientUsername:String,
    deliveryMethod:String,
    paymentMethod:String
}