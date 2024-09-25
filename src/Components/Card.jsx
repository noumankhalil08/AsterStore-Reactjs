import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { addToWishList } from '../redux/WishSlice';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const dispatch = useDispatch();

  const handleHeartToggle = () => {
    setIsHeartFilled(!isHeartFilled);
    if (!isHeartFilled) {
      dispatch(addToWishList(product));
    }
  };

  return (
    <div className="card">
      <div className="wishlist-icon">
        <div className="icon-link" onClick={handleHeartToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi bi-heart ${isHeartFilled ? 'd-none' : ''}`}
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`bi bi-heart-fill ${isHeartFilled ? '' : 'd-none'}`}
            viewBox="0 0 16 16"
          >
            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
          </svg>
        </div>
      </div>

      <Link to="/productpage" style={{ textDecoration: 'none' }}>
        <div className="card-image-container">
          <img src={product.images[0]} alt="item-1" className="card-image primary" />
          <img src={product.images[1]} alt="Second Image" className="card-image secondary" />
          {product.sale && (
            <span
              className="badge badge-danger"
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                backgroundColor: '#ff0000',
                color: '#fff',
                padding: '5px 10px',
                borderRadius: '5px',
                fontSize: '12px',
              }}
            >
              Sale
            </span>
          )}
        </div>

        <h4 className="card-title">{product.title}</h4>
        <h5 className="card-price">
          {product.sale && <s style={{ fontSize: 'small', marginRight: '12px' }}> Rs 1880.00 </s>}
          Rs.{product.price}
        </h5>

        <div className="color-options">
          <span className="color-option" style={{ backgroundColor: '#003B6F' }}></span>
          <span className="color-option" style={{ backgroundColor: '#000000' }}></span>
          <span className="color-option" style={{ backgroundColor: '#FFFFFF' }}></span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
