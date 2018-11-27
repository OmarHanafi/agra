import { CartItem} from './cartItem';

export interface OrderDetail {
    cartItems : CartItem[];
    totalPrice:number;
}