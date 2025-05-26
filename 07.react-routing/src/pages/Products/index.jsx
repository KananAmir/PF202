import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState(null);

    const getProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (!products) return <div className="text-center mt-10 text-lg">Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="border rounded-xl p-4 shadow hover:shadow-lg transition duration-300"
                    >
                        <img src={product.image} alt={product.title} className="h-40 mx-auto mb-4 object-contain" />
                        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-700 text-sm mb-2 line-clamp-3">{product.description}</p>
                        <p className="text-lg font-bold text-green-600 mb-2">${product.price}</p>
                        <Link
                            to={`detail/${product.id}`}
                            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
