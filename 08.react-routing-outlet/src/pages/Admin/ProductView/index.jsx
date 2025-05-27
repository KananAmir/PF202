import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL, ENDPOINTS } from "../../../constants";
import { useEffect, useState } from "react";
const ProductView = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams();

    const nav = useNavigate();
    const getProductById = async () => {
        try {
            const resp = await axios(`${BASE_URL}${ENDPOINTS.PRODUCTS}/${id}`);
            setProduct(resp.data)
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getProductById();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={product.image} alt={product.title} width={100} />
            <h2>Product Name: {product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>

            <button onClick={()=>{nav(-1)}}>Go Back</button>
        </div>
    )
}

export default ProductView
