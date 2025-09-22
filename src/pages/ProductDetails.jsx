import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import "../pages/ProductDetails.css";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };



  useEffect(() => {
    async function getProduct() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  
  return (
    <div className="container product">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h1 className="display-5">{product.title}</h1>
          <p className="text-muted">{product.category}</p>
          <p className="lead">{product.description}</p>
          <div className="d-flex align-items-center mb-3">
            <Star className="text-warning me-1" size={20} />
            <span>{product.rating?.rate} ({product.rating?.count} reviews)</span>
          </div>
          <p className="h2 fw-bold mb-4">${product.price}</p>
          <div className="d-flex gap-2">
            <button className="btn btn-primary btn-lg d-flex align-items-center" onClick={handleAddToCart}>
              <ShoppingCart size={22} className="me-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}