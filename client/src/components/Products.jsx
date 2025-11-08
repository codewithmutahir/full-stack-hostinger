import React from "react";
import { useState, useEffect, useMemo } from "react";
import "../App.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Calculate total from cart items to avoid floating-point precision issues
  const total = useMemo(() => {
    const sum = cart.reduce((acc, item) => {
      const quantity = item.quantity || 1;
      return acc + item.price * quantity;
    }, 0);
    // Round to 2 decimal places for currency
    return Math.round(sum * 100) / 100;
  }, [cart]);

  useEffect(() => {
    // Use Railway server URL in production, localhost in development
    const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
    const apiUrl = isProduction 
      ? 'https://endearing-comfort-production-a291.up.railway.app'
      : 'http://localhost:4000';
    
    fetch(`${apiUrl}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data.products);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      // If item exists, increase quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      // If new item, add with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemovefromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const handleIncreaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (product) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === product.id) {
            const newQuantity = (item.quantity || 1) - 1;
            // Remove item if quantity reaches 0
            if (newQuantity <= 0) {
              return null;
            }
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter(Boolean)
    ); // Remove null items
  };

  return (
    <div className="products-page">
      <header className="page-header">
        <h1>🛍️ Shopping Store</h1>
        <div className="cart-badge">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cart.length}</span>
        </div>
      </header>

      <div className="page-container">
        <main className="products-section">
          <h2 className="section-title">Products</h2>
          {error && (
            <div className="error-message">
              <strong>Error loading products:</strong> {error.message}
            </div>
          )}
          
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading products...</p>
            </div>
          ) : (
            <div className="products-grid">
              {products?.map((product) => {
                const cartItem = cart.find((item) => item.id === product.id);
                const inCart = !!cartItem;
                
                return (
                  <div key={product.id} className="product-card">
                    <div className="product-image-wrapper">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                      {!product.inStock && (
                        <span className="stock-badge out-of-stock">Out of Stock</span>
                      )}
                    </div>
                    <div className="product-details">
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <div className="product-footer">
                        <span className="product-price">${product.price.toFixed(2)}</span>
                        {inCart ? (
                          <div className="cart-actions">
                            <div className="quantity-controls">
                              <button 
                                className="btn btn-quantity"
                                onClick={() => handleDecreaseQuantity(product)}
                              >
                                −
                              </button>
                              <span className="quantity-display">{cartItem.quantity || 1}</span>
                              <button 
                                className="btn btn-quantity"
                                onClick={() => handleIncreaseQuantity(product)}
                                disabled={!product.inStock}
                              >
                                +
                              </button>
                            </div>
                            <button 
                              className="btn btn-remove"
                              onClick={() => handleRemovefromCart(product)}
                            >
                              Remove
                            </button>
                          </div>
                        ) : (
                          <button 
                            className="btn btn-add-to-cart"
                            onClick={() => handleAddToCart(product)}
                            disabled={!product.inStock}
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>

        <aside className="cart-sidebar">
          <h2 className="cart-title">Shopping Cart</h2>
          {cart.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-cart-icon">🛒</span>
              <p>Your cart is empty</p>
              <p className="empty-cart-hint">Add some products to get started!</p>
            </div>
          ) : (
            <>
              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-info">
                      <h4 className="cart-item-name">{item.name}</h4>
                      <p className="cart-item-price">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="cart-quantity-controls">
                        <button 
                          className="btn btn-small"
                          onClick={() => handleDecreaseQuantity(item)}
                        >
                          −
                        </button>
                        <span className="cart-quantity">{item.quantity || 1}</span>
                        <button 
                          className="btn btn-small"
                          onClick={() => handleIncreaseQuantity(item)}
                        >
                          +
                        </button>
                      </div>
                      <span className="cart-item-total">
                        ${((item.price * (item.quantity || 1)).toFixed(2))}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <div className="cart-total-row">
                  <span>Total:</span>
                  <span className="total-price">${total.toFixed(2)}</span>
                </div>
                <button className="btn btn-checkout">Checkout</button>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}

export default Products;
