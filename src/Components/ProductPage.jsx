import React, { useState } from 'react';
import logo1 from '../PICTURES/Tribal pride/ERG-003-BLK-1.webp';
import logo2 from '../PICTURES/Tribal pride/ERG-003-BLU-1.webp';
import logo3 from '../PICTURES/Tribal pride/ERG-003-BLU-2.webp';
import logo4 from '../PICTURES/Tribal pride/ERG-003-PRT-1.webp';
import logo5 from '../PICTURES/Tribal pride/ERG-003-WHT-1.webp';
import ShoppingCards from './ShoppingCards';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/CartSlice';

function ProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState('Ferozy_img1');
  const [quantity, setQuantity] = useState(1);

  // Move product object below the hooks
  const product = {
    name: "Tribal Pride Earings",
    price: 1380.00,
    quantity, 
    image: selectedImage,
  };
  

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
    navigate("/cart");
  };

  const showImageLarge = (imgId) => {
    setSelectedImage(imgId);
  };

  const changeCounter = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <>
      <div className="container mt-2 border-bottom Main_cardBodyContainer">
        <div className="row Main_cardBody m-0 p-0">
          {/* Product Images */}
          <div className="col-7 Product_images">
            <div className="d-flex justify-content-center largerPics mt-3">
              <img
                src={logo2}
                className="ProductLarge_img Ferozy_large"
                alt="Product img"
                id="Ferozy_img1"
                style={{ display: selectedImage === 'Ferozy_img1' ? 'block' : 'none' }}
              />
              <img
                src={logo3}
                className="ProductLarge_img Ferozy_large"
                alt="Product img"
                id="Ferozy_img2"
                style={{ display: selectedImage === 'Ferozy_img2' ? 'block' : 'none' }}
              />
              <img
                src={logo1}
                alt="Product img"
                className="ProductLarge_img Black_large"
                id="Black_img"
                style={{ display: selectedImage === 'Black_img' ? 'block' : 'none' }}
              />
              <img
                src={logo5}
                alt="Product img"
                className="ProductLarge_img white_large"
                id="white_img"
                style={{ display: selectedImage === 'white_img' ? 'block' : 'none' }}
              />
              <img
                src={logo4}
                alt="Product img"
                className="ProductLarge_img multi_large"
                id="multi_img"
                style={{ display: selectedImage === 'multi_img' ? 'block' : 'none' }}
              />
            </div>

            <div className="small_pic_col">
              <img
                src={logo2}
                alt="Product img"
                className="ProductSmall_img Ferozy_small"
                id="Ferozy_small_img1"
                onClick={() => showImageLarge('Ferozy_img1')}
              />
              <img
                src={logo3}
                alt="Product img"
                className="ProductSmall_img Ferozy_small"
                id="Ferozy_small_img2"
                onClick={() => showImageLarge('Ferozy_img2')}
              />
              <img
                src={logo1}
                alt="Product img"
                className="ProductSmall_img Black_small"
                id="Black_small_img"
              />
              <img
                src={logo5}
                alt="Product img"
                className="ProductSmall_img white_small"
                id="white_small_img"
              />
              <img
                src={logo4}
                alt="Product img"
                className="ProductSmall_img multi_small"
                id="multi_small_img"
              />
            </div>
          </div>
          {/* Product Images */}

          {/* Product Info */}
          <div className="col-5 Product_info mt-4">
            {/* Title */}
            <div>
              <span className="product__title"> Tribal Pride </span>
            </div>

            {/* Price */}
            <div>
              <h5 className="product-price">Rs.1380.00</h5>
            </div>

            {/* Colors */}
            <div>
              <h5 className="Product_colors">Color</h5>
              <div className="Productcolor-options">
                <span
                  onClick={() => showImageLarge('Ferozy_img1')}
                  className="Productcolor-option"
                  style={{ backgroundColor: '#003B6F' }}
                ></span>
                <span
                  onClick={() => showImageLarge('Black_img')}
                  className="Productcolor-option"
                  style={{ backgroundColor: '#000000' }}
                ></span>
                <span
                  onClick={() => showImageLarge('white_img')}
                  className="Productcolor-option"
                  style={{ backgroundColor: '#FFFFFF' }}
                ></span>
                <span
                  onClick={() => showImageLarge('multi_img')}
                  className="Productcolor-option custom-circle1"
                ></span>
              </div>
            </div>

            {/* Quantity */}
           

            {/* Product Description */}
            <div>
              <p className="Product_description">
                Add some tribal flair to your style with Tribal Pride! These earrings are
                not only trendy and come in a variety of colors, but they are also
                tarnish-free for long-lasting wear. Get your jhumkas on today and show off
                your unique style!
              </p>
            </div>

            {/* Dimensions */}
            <div className="product__accordion accordion quick-add-hidden border-bottom border-top">
              <details className="custom-smoothness">
                <summary
                  role="button"
                  aria-expanded="false"
                  aria-controls="ProductAccordion-collapsible_tab_xmPLdQ-template--22077431808287__main"
                >
                  <div className="dimension_headingAnd_icon">
                    <svg
                      className="icon icon-accordion"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      {/* SVG path content */}
                    </svg>
                    Dimensions
                  </div>
                </summary>

                <div className="accordion__container pt-1">
                  <p>
                    Earrings Length: 3 Inches <br />
                    Earrings Weight: 15 grams
                  </p>
                </div>
              </details>
            </div>

            {/* Add to Cart Button */}
            <div className="btn_container mt-4" style={{ backgroundColor: '#eff0f5' }}>
              <span className="button_">
                <button
                  className="btn rounded-pill add_to_cart"
                  type="submit"
                  id="add_to_cart_button"
                  onClick={handleAddToCart} // Call function directly
                >
                  Add to cart
                </button>
              </span>
            </div>

            {/* Free Shipping Line */}
            <div className="ShippingLine mt-2 ">
              <h6 className='fw-bold'> 🚚  Rs.150 for shipping throughout Pakistan!</h6>
            </div>
            <div className="last_three_icons">
      <div className="row">
        <div className="col-4 icon_">
          <i className="bi bi-box-seam"></i>
          <h6 style={{ fontSize: 'medium', fontWeight: 100, textAlign: 'center' }}>
            Wrapped with care
          </h6>
        </div>

        <div className="col-4 icon_">
          <i className="bi bi-truck"></i>
          <h6 style={{ fontSize: 'medium', fontWeight: 100, textAlign: 'center' }}>
            Speedy Delivery
          </h6>
        </div>

        <div className="col-4 icon_">
          <i className="bi bi-arrow-return-left"></i>
          <h6 style={{ fontSize: 'medium', fontWeight: 100, textAlign: 'center' }}>
            Hassle-Free returns
          </h6>
        </div>
      </div>
    </div>
          </div>
          {/* Product Info */}
        </div>
      </div>
      

      {/* Related Products */}
      <div className="container-fluid mt-4">
        <div className="row m-0 p-0">
          <h4 className='fw-bold'>YOU MAY ALSO LIKE</h4>
        </div>
        <div className="row mt-3">
          <ShoppingCards />
        </div>
      </div>
    </>
  );
}

export default ProductPage;


