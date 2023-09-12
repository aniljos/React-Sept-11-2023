import { useEffect, useState } from "react";
import axios from 'axios';

function ListProducts(){

    const [products, setProducts] = useState<Array<any>>([]);
    useEffect(() => {
        fetchProducts();
    },[])

    function fetchProducts(){

        const url = "http://localhost:9000/products";
        axios
            .get(url) //return a Promise => fulfilled or rejected
            .then((response) => {
                    //status: 100, 200, 300
                    console.log("success", response);
                    setProducts(response.data);
            }, (errorResponse) => {
                    //status: 400, 500
                    console.log("error", errorResponse);
            })
    }

    return (
        <div>
            <h3>List Products</h3>

            <div>
                {products.map((item: any) => {

                    return (
                        <div>
                            <p>Id: {item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ListProducts;