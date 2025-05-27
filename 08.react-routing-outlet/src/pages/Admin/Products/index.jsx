import { useEffect, useState } from "react";
import { BASE_URL, ENDPOINTS } from "../../../constants";
import axios from "axios";
import { Link } from "react-router-dom";
function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = async() => {
    try {
      const resp = await axios(`${BASE_URL}${ENDPOINTS.PRODUCTS}`);
      setProducts(resp.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }


  useEffect(() => {
    getProducts();
  }, [] );

  if (!products.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        {products.map((p)=>{
          return (
            <li key={p.id} className="border-b-2 border-gray-200 p-4">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-gray-600">{p.description}</p>
              <p className="text-green-500 font-bold">${p.price}</p>
              <img src={p.image} alt={p.title} className="w-32 h-32 object-cover mt-2" />
              <Link to={`/admin/products/${p.id}`}>details</Link>
            </li>
          )
    })}
      </ul>
    </>
  )
}

export default Products