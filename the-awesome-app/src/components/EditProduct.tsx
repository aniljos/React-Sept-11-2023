
import { ChangeEvent, useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { Product } from '../model/Product';
import axios from 'axios';

function EditProduct(){

    const navigate = useNavigate();
    const params = useParams();
    const [product, setProduct] = useState<Product>(new Product(0, "", 0, ""));

    useEffect(() => {

        fetchProduct();
    }, [])

    async function fetchProduct(){

        try {
            const url = "http://localhost:9000/products/" + params["id"];
            const response = await axios.get<Product>(url);
            setProduct(response.data);
        } catch (error) {
            alert("Failed to fetch data");
        }

    }

    function handleChangeName(evt: ChangeEvent<HTMLInputElement>){
        const value = evt.target.value;
        
        const copy = {...product}; // spread operator
        copy.name = value;
        setProduct(copy);
    }

    function handleChangeNameTest(evt: ChangeEvent<HTMLInputElement>, propName: string){
        const value = evt.target.value;
        const copy = {...product}; // spread operator
        copy.name = value;
        setProduct(copy);
    }

    return (
        <div>
            <h3>Edit Product : {params["id"]}</h3>

            <div className="form-group">
                <label>Name</label>
                <input className="form-control" value={product.name} 
                    onChange={handleChangeName}/>
            </div>

            <div className="form-group">
                <label>Description</label>
                <input  className="form-control" value={product.description} 
                                onChange={(e) => setProduct({...product, description: e.target.value})}/>
            </div>

            <div className="form-group">
                <label>Price</label>
                <input type="number" className="form-control" value={product.price}
                                onChange={(e) => setProduct({...product, price: Number(e.target.value)})}/>
            </div>

            <div>
                <button className="btn btn-primary">Save</button>&nbsp;
                <button className="btn btn-info">Cancel</button>
            </div>
        </div>
    )
}
export default EditProduct;