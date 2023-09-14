import { useDispatch, useSelector } from "react-redux";
import { GagdetStoreType, removeFromCart } from "../redux/gadgetsReducer";
import { CartItem } from "../model/CartItem";

function ViewCart(){

    const cart =  useSelector((state: any) => state.gadgets.cart) as Array<CartItem>;
    const dispatch = useDispatch();

    function remove(cartItem : CartItem){
        
        dispatch(removeFromCart(cartItem));
    }
    return (
        <div>
            <h3>View Cart</h3>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {cart.map((item, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className="card bg-light mb-3 border-success">
                                <p className="card-header">{item.product?.name}</p>
                                <div className="card-body">
                                    <p className="card-text">{item.product?.description}</p>
                                    <p className="card-text">Quantity: {item.quantity}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" onClick={() => { remove(item) }}>Remove</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ViewCart;