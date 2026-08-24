import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate();
    const [instructions, setInstructions] = useState("");

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return <div className="cart-empty">Your cart is empty.</div>;
    }

    const handleCheckout = () => {
        navigate("/checkout", { state: { instructions } });
    };

    return (
        <div className="cart-page">
            <div className="cart-page-grid">
                <div className="cart-table-col">
                    <h1 className="cart-page-heading">Your Cart</h1>

                    <div className="cart-table-head">
                        <span>Product</span>
                        <span>Total</span>
                    </div>
                    <div className="cart-table-divider" />

                    {cartItems.map((item) => (
                        <div className="cart-row" key={item.id}>
                            <img src={item.image} alt={item.name} className="cart-row-img" />

                            <div className="cart-row-info">
                                <p className="cart-row-name">{item.name}</p>
                                {item.size && <p className="cart-row-meta">Size: {item.size}</p>}
                                <p className="cart-row-meta">Rs. {item.price}</p>

                                <div className="cart-row-qty-wrap">
                                    <div className="cart-row-qty">
                                        <button
                                            type="button"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            aria-label="Decrease quantity"
                                        >
                                            −
                                        </button>
                                        <span>{String(item.quantity).padStart(2, "0")}</span>
                                        <button
                                            type="button"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            aria-label="Increase quantity"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        className="cart-row-remove"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>

                            <p className="cart-row-total">
                                Rs. {(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="cart-summary-card">
                    <p className="cart-summary-label">Special instruction for seller</p>
                    <textarea
                        className="cart-summary-textarea"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        rows={4}
                    />

                    <div className="cart-summary-divider" />

                    <div className="cart-summary-total-row">
                        <div>
                            <p className="cart-summary-total-label">Total</p>
                            <p className="cart-summary-total-note">
                                Tax included. Shipping calculated at check out
                            </p>
                        </div>
                        <p className="cart-summary-total-value">Rs. {total.toFixed(2)}</p>
                    </div>

                    <button
                        type="button"
                        className="cart-summary-checkout"
                        onClick={handleCheckout}
                    >
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;