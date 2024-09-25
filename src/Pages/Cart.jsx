
import React from 'react';
import { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import logo1 from '../PICTURES/Tribal pride/ERG-003-BLK-1.webp';
import { Link } from 'react-router-dom';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../redux/CartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch(); 
  useEffect(() => {
   dispatch(getTotals());
  },[cart,dispatch])
  const handleRemoveFromCart = (cartItem) => {
      dispatch(removeFromCart(cartItem));
  };
  const  handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  }
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  }
  const handleClearCart = () => {
    dispatch(clearCart( ));
  }
  return (
    <>
      <div className="cart-container bg-color-nav">
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <h2 className='fw-bold'>Your cart is empty</h2>
            <div className="start-shopping">
              <Link to="/">
              <button className="btn w-100 py-2 mb-3" style={{color: '#eff0f5',
                backgroundColor: '#a938ff',}}>Start Shopping</button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={logo1} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                    </div>
                  </div>
                  
                    <div className="cart-product-price">Rs{cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                    </div>
                    <div className="cart-product-total-price">
                      Rs{cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                
              ))}
            </div>
            <div className="cart-summary">
              <button className="clear-cart" onClick={() =>handleClearCart()}>Clear Cart</button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">Rs{cart.cartTotalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkoutform">
                  <button style={{color: '#eff0f5',
                backgroundColor: '#a938ff',}}>Check Out</button>
                </Link>
                <div className="continue-shopping">
                  <Link to="/products">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                    <span>Continue Shopping</span>
                   
                   
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;

