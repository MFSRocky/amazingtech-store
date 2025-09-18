import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ id, title, image, description, price }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, image, description, price }));
  };

  return (
    <div className="col d-flex">
      <div className="card h-100 border-0 shadow-sm product-card">
        <Link to={`/products/${id}`}>
          <img src={image} className="card-img-top" alt={title} />
        </Link>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted flex-grow-1 card-text-truncate">
            {description}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <p className="h5 fw-bold m-0">${price}</p>
            <button className="btn btn-primary" onClick={handleAddToCart}>
              <ShoppingCart size={18} className="me-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
