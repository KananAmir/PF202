import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ProductDetail() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const getProduct = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    if (!product) return <div className="text-center mt-10 text-lg">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6">
                <img src={product.image} alt={product.title} className="h-60 object-contain mx-auto md:mx-0" />
                <div className="flex-1">
                    <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-xl text-green-600 font-semibold mb-2">Price: ${product.price}</p>
                    <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
                    <p className="text-sm text-yellow-600 mb-4">Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)</p>
                    <button
                        className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                        // onClick={() => navigate("/")
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
