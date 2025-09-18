import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../pages/Home.css";


export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container-fluid home">
      <div className="head mt-5 text-center">
        <h1>Home</h1>
        <p>Welcome to the Store!</p>
      </div>
      <div className="product-container">
        <h2>List of Products</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
