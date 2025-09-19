import { useSelector, useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../store/slices/cartSlice";
import { Link } from "react-router-dom";
import "../pages/CartPage.css"

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    dispatch(updateQuantity({ id: item.id, quantity: Math.max(newQuantity, 0) }));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item__details">
        <img
          src={item.image}
          alt={item.title}
          className="cart-item__image"
        />
        <div className="cart-item__info">
          <h2 className="cart-item__title">{item.title}</h2>
          <p className="cart-item__price">${item.price.toFixed(2)}</p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="cart-item__quantity-controls">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="cart-item__quantity-btn"
          aria-label={`Decrease quantity of ${item.title}`}
        >
          -
        </button>
        <span className="cart-item__quantity-value">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="cart-item__quantity-btn"
          aria-label={`Increase quantity of ${item.title}`}
        >
          +
        </button>
      </div>

      <button onClick={handleRemoveItem} className="cart-item__remove-btn" aria-label={`Remove ${item.title} from cart`}>
        <Trash2 />
      </button>
    </div>
  );
}

function OrderSummary({ total, itemCount }) {
  const dispatch = useDispatch();
  return (
    <div className="order-summary">
      <h2 className="order-summary__title">Order Summary</h2>
      <div className="order-summary__details">
        <div className="order-summary__row">
          <span>Items ({itemCount})</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="order-summary__row">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <hr className="order-summary__divider" />
        <div className="order-summary__row order-summary__total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <button className="order-summary__checkout-btn">
        Checkout
      </button>
      <button onClick={() => dispatch(clearCart())} className="order-summary__clear-btn">
        Clear Cart
      </button>
    </div>
  );
}

export default function CartPage() {
  const { items, total, itemCount } = useSelector((state) => state.cart);

  return (
    <div className="cart-page">
      <h1 className="cart-page__title">Your Cart</h1>

      {items.length === 0 ? (
        <div className="cart-page__empty">
          <p className="cart-page__empty-text">Your cart is empty 🛒</p>
          <Link to="/" className="cart-page__continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-page__content">
          {/* Cart Items */}
          <div className="cart-page__items">
            {items.map((item) => <CartItem key={item.id} item={item} />)}
          </div>

          {/* Summary */}
          <OrderSummary total={total} itemCount={itemCount} />
        </div>
      )}
    </div>
  );
}
