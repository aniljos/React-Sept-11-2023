import { CartItem } from "../model/CartItem"
import { Product } from "../model/Product"
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type GagdetStoreType = {
    cart: Array<CartItem>,
    products: Array<Product>
}

const initState: GagdetStoreType = {
    cart: [],
    products: []
}

const gadgetsSlice = createSlice({

    name: "gadgetsSlice",
    initialState: initState,
    reducers: {

        addToCart: (state: GagdetStoreType, action: PayloadAction<CartItem>)=> {

            state.cart.push(action.payload);
        },
        removeFromCart: (state: GagdetStoreType, action: PayloadAction<CartItem>)=> {

            const index = state.cart.findIndex(item => item.product?.id === action.payload.product?.id);
            if(index !== -1){
                state.cart.splice(index, 1);
            }
        },
    }
});

//addToCart, removeFromCart==> action creators
export const {addToCart, removeFromCart} =  gadgetsSlice.actions;

export const gadgetsReducer = gadgetsSlice.reducer;