import { useEffect, useState } from "react";
import axios from 'axios';
import {Product} from '../model/Product';
import './ListProducts.css';
import {useNavigate} from 'react-router-dom';


function ListProducts(){

    const [products, setProducts] = useState<Array<Product>>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    },[])

    async function fetchProducts(){

        const url = "http://localhost:9000/products";
        //async and await
        try {
            const response = await axios.get<Product[]>(url);
            console.log("success", response);
            setProducts(response.data);

        } catch (errorResponse) {
            console.log("error", errorResponse);
        }
    }

    // function fetchProducts(){

    //     const url = "http://localhost:9000/products";
    //     axios
    //         .get<Array<Product>>(url) //return a Promise => fulfilled or rejected
    //         .then((response) => {
    //                 //status: 100, 200, 300
    //                 console.log("success", response);
    //                 setProducts(response.data);
    //         }, (errorResponse) => {
    //                 //status: 400, 500
    //                 console.log("error", errorResponse);
    //         })
    // }

    async function deleteProduct(product: Product){

        try {
            
            const url = "http://localhost:9000/products/" + product.id;
            await axios.delete(url);
            fetchProducts();
            alert("deleted product");

        } catch (error) {
            alert("Failed to delete");
        }
    }

    function editProduct(product: Product){
            navigate("/products/" + product.id);
    }

    return (
        <div>
            <h3>List Products</h3>

            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                {products.map((item: Product) => {

                    return (
                        <div key={item.id} className="product">
                            <p>Id: {item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.price}</p>

                            <div>
                                <button onClick={() => { deleteProduct(item)}}>Delete</button> &nbsp;
                                <button onClick={() => {editProduct(item)}}>Edit</button>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ListProducts;