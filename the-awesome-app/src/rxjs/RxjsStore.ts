import { CartItem } from "../model/CartItem";
import {Subject} from 'rxjs';

export class RxjsStore{

    private cart: Array<CartItem> = [];
    public subject: Subject<Array<CartItem>> = new Subject<Array<CartItem>>();

    public addToCart(cartItem: CartItem):  void{

        this.cart.push(cartItem);
        this.subject.next([...this.cart]);
    }

    public remove(cartItem: CartItem): void{

        const index = this.cart.findIndex(item => item.product?.id === cartItem.product?.id);
        if(index !== -1){
            this.cart.splice(index, 1);
            this.subject.next([...this.cart]);
        }
    }
    public getCart(): Array<CartItem>{
        return [...this.cart];
    }

}

export const rxjsStore =new RxjsStore();