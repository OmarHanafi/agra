import { CartItem} from './cartItem';

export interface Cart {
    cartItems : CartItem[];
    totalPrice:number;
}