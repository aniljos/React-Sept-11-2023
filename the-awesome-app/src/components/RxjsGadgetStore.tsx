import { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import useAxiosFetchProducts from "../hooks/useAxiosFetchProducts";
import { Product } from "../model/Product";
import {rxjsStore} from '../rxjs/RxjsStore';
import { CartItem } from "../model/CartItem";
import RxjsViewCart from "./RxjsViewCart";

function RxjsGadgetStore(){

    useTitle("Gadgets");
    const [products] = useAxiosFetchProducts();

   function saveProductToCart(product: Product){

       rxjsStore.addToCart(new CartItem(product, 1));

   }
    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button className="btn btn-primary" 
                                        onClick={() => saveProductToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }
    


    return (
        <div>
            <h3>Rxjs Gadget Store</h3>
            <div style={{margin: "7px", padding: "7px" , border: "2px solid blue"}}>
                    <RxjsViewCart/>
            </div>
            <div>
                {renderProducts()}
            </div>
        </div>
    )
}

export default RxjsGadgetStore;