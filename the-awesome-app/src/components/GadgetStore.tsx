import { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import useAxiosFetchProducts from "../hooks/useAxiosFetchProducts";

function GadgetStore(){

    useTitle("Gadgets");
    const [products] = useAxiosFetchProducts();
   
    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button className="btn btn-primary">Add To Cart</button>
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
            <h3>Gadget Store</h3>
            {renderProducts()}
        </div>
    )
}

export default GadgetStore;