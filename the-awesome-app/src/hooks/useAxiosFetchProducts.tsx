import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "../model/Product";

function useAxiosFetchProducts(){

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=> {
        fetchProducts();
    }, [])

    async function fetchProducts(){
        try {
            const url = "http://localhost:9000/products";
            const response = await axios.get<Product[]>(url);
            setProducts(response.data);

        } catch (error) {
            
        }
    }
    return [products] as const;
}
export default useAxiosFetchProducts;