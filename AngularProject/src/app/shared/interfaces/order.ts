import { CartDetail } from "./cartDetail";


export interface Order{
    cartDetail:CartDetail,
    deliveryMethod:String,
    paymentMethod:String
}