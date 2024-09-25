
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishList, clearWishList } from '../redux/WishSlice'; // Import clearWishList

const WishList = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromWishList(item));
  };

  const handleClearWishList = () => {
    dispatch(clearWishList());
  };

  return (
    <div style={{ backgroundColor: '#eff0f5', padding: '2rem' }}>
      {wishlistItems.length === 0 ? (
        <>
          <div className="cartEmpty_heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p className='fw-bold'>Your Wishlist is empty</p>
          </div>
          <div className="container-fluid btn_container mb-5">
            <div className="button_ d-flex justify-content-center">
              <Link to="/products">
                <button
                  className="btn btn-outline-dark rounded-pill"
                  type="button"
                  style={{
                    borderWidth: '0rem',
                    width: '9.05rem',
                    fontWeight: 'lighter',
                    fontSize: '11.5px',
                    height: '36px',
                    color: '#eff0f5',
                    backgroundColor: '#a938ff',
                    marginBottom: '7px',
                  }}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
        <div className="wishlist-content">
          <div className="wishlist-header" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h2 className='fw-bold'>Your Wishlist</h2>
            </div>
           
          <div className="wishlist-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
            {wishlistItems.map((item, index) => (
              <div key={index} className="wishlist-item" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <div className="wishlist-image" style={{ textAlign: 'center', marginBottom: '15px' }}>
                  <img src={item.images[0]} alt={item.title} style={{ width: '100%', borderRadius: '10px', objectFit: 'cover' }} />
                </div>
                <div className="wishlist-details" style={{ textAlign: 'center' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h4>
                  <p style={{ fontSize: '1rem', marginBottom: '15px' }}>Rs. {item.price}</p>
                  <button
                    className="btn"
                    onClick={() => handleRemove(item)}
                    style={{
                      backgroundColor: '#a938ff',
                      color: '#fff',
                      borderRadius: '20px',
                      padding: '10px 15px',
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" clearWishList mt-4 ">
            <button
              onClick={handleClearWishList}
            >
              Clear Wishlist
            </button>
          </div>
        </>
        
      )}
    </div>
  );
};

export default WishList;

