import { ShoppingCart, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { toggleWishlist, selectIsItemInWishlist } from "../store/slices/wishlistSlice";
import "../components/ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({ id, title, image, description, price }) {
  const dispatch = useDispatch();
  const product = { id, title, image, description, price };
  const isInWishlist = useSelector(state => selectIsItemInWishlist(state, id));

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleWishlist(product));
  };

  return (
    <div className="col d-flex">
      <div className="card h-100 border-0 shadow-sm product-card">
        <Link to={`/products/${id}`}>
          <img src={image} className="card-img-top" alt={title} />
        </Link>
        <div className="card-body d-flex flex-column">
          <button
            className={`btn btn-outline-danger btn-sm product-card__wishlist-btn ${isInWishlist ? 'active' : ''}`}
            onClick={handleToggleWishlist}
            aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart size={18} fill={isInWishlist ? 'currentColor' : 'none'} />
          </button>
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
