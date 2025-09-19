import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { selectWishlistItems } from '../store/slices/wishlistSlice';
import './CategoryPage.css'; // Reusing styles for consistency
import './cartpage.css'; // Reusing styles for empty page message

export default function WishlistPage() {
  const wishlistItems = useSelector(selectWishlistItems);

  return (
    <div className="category-page container-xl">
      <h1 className="category-page__title">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <div className="cart-page__empty">
          <p className="cart-page__empty-text">Your wishlist is empty 🤍</p>
          <Link to="/" className="cart-page__continue-shopping">
            Discover Products
          </Link>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {wishlistItems.map((product) => <ProductCard key={product.id} {...product} />)}
        </div>
      )}
    </div>
  );
}