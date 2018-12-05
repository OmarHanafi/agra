import { CartItem} from './cartItem';

export interface CartDetail {
    cartItems : CartItem[];
    totalPrice:number;
}