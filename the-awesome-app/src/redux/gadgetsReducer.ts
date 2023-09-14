import { Product } from "../model/Product"

export type GagdetStoreType = {
    cart: Array<any>,
    products: Array<Product>
}

const initState: GagdetStoreType = {
    cart: [],
    products: []
}

export const gadgetsReducer = (currrentState=initState, action: any)=>{

    return currrentState;
}