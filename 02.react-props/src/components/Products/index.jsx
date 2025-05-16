import { products } from "../../data"

const Products = () => {
  return (
    <>

    {products.map((product)=>{
        return (
            <div key={product.id} style={{border: "1px solid black", margin: "10px", padding: "10px", backgroundColor: "#f0f0f0"}}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
                <img src={product.image} alt={product.title} width={200}/>
            </div>
        )
    })}
    </>
  )
}

export default Products