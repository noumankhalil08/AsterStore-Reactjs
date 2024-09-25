import React from 'react';
import { useSelector } from 'react-redux';
import logo1 from '../PICTURES/Aster_Logo_Transparent.png'
import logo2 from '../PICTURES/Lumus lush/NES-001-BLK-1.webp'
import logo3 from '../PICTURES/Tribal pride/ERG-003-BLU-2.webp'
import logo4 from '../PICTURES/Harmony/RNG-002-BLK-1.webp'
import logo5 from '../PICTURES/Lumus lush/NES-001-BLK-1.webp'
import logo6 from '../PICTURES/Tribal pride/ERG-003-BLU-2.webp'
import logo7 from '../PICTURES/Harmony/RNG-002-BLK-1.webp'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <>
    <div
      className="container-fluid nav_bar  sticky-top border-bottom border-top"
      id="Main_header"
      style={{ background: '#eff0f5 !important',  height:'120px'}}
    >
      <div className="row align-items-center" style={{ marginRight: 0, marginLeft: 0 }}>
        {/* Logo */}
        <div className="col-3 d-flex justify-content-start logo-col ">
          <Link to="/" className="logo d-flex justify-content-center align-items-center" style={{height:'120px', width:'250px'}}>
            <img src={logo1} alt="logo" className="logo " />
          </Link>
        </div>
        {/* Nav items */}
        <div className="col-6 navbar-col d-flex justify-content-center">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                style={{ border: 0 }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Offcanvas for mobile navbar */}
              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    style={{ marginLeft: '-350px !important' }}
                  ></button>
                </div>

                <div className="offcanvas-body">
                  <ul className="nav-links_ navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item list_style LI">
                      <Link className="nav-links_li_a" to="/">
                        HOME
                      </Link>
                    </li>

                    <li className="nav-item list_style LI">
                      <Link className="nav-links_li_a_sale" style={{ color: 'red' }} to="/sale">
                        SALE
                      </Link>
                      <div className="mega-box">
                        <div className="content" style={{ height: '260%', width: '100%' }}>
                          <div className="main main_ main_P">
                            <p>Special Sale</p>
                            <ul className="mega-links">
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Saller
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Radiance
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Starlight
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Moon
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="main main_ main_P">
                            <p>50% OFF</p>
                            <ul className="mega-links">
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Saller
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Radiance
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Starlight
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Moon
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="main main_ d-flex flex-row justify-content-end">
                            <div
                              id="carouselExampleSlidesOnly"
                              className="carousel slide"
                              data-bs-ride="carousel"
                              data-bs-interval="2000"
                            >
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img
                                    src={logo2}
                                    className="d-block w-100 carosalImages"
                                    alt="1st_img"
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    src={logo3}
                                    className="d-block w-100 carosalImages"
                                    alt="2nd_img"
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    src={logo4}
                                    className="d-block w-100 carosalImages"
                                    alt="3rd_img"
                                  />
                                </div>
                              </div>

                              <div className="d-flex justify-content-center">
                                <Link to="/sale">
                                  <button className="SeeMorebutton">See More On Sale</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item list_style LI">
                      <Link className="nav-links_li_a" style={{ marginTop: '1px' }} to="/products">
                        PRODUCTS
                      </Link>
                      <div className="mega-box">
                        <div className="content">
                          <div className="main main_ main_P">
                            <ul className="mega-links">
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Saller
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Radiance
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Starlight
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Moon
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="main main_ main_P">
                            <ul className="mega-links">
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Logo Design
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Card Design
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Template Design
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Broushure Design
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="main main_ main_P">
                            <ul className="mega-links">
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  HTML Website
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Wordpress Website
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Joomla Website
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Education Website
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="main main_ main_P">
                            <ul className="mega-links">
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Personal Email
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Business Email
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Mobile Email
                                </a>
                              </li>
                              <li className="list_style">
                                <a className="MM_items" href="#">
                                  Web Marketing
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div
                            className="main main_ d-flex flex-row justify-content-end megaMenueCarousal"
                            style={{ width: '120%' }}
                          >
                            <div
                              id="carouselExampleSlidesOnly"
                              className="carousel slide"
                              data-bs-ride="carousel"
                              data-bs-interval="2000"
                            >
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <img
                                    src={logo5}
                                    className="d-block w-100 carosalImages"
                                    alt="1st_img"
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    src={logo6}
                                    className="d-block w-100 carosalImages"
                                    alt="2nd_img"
                                  />
                                </div>
                                <div className="carousel-item">
                                  <img
                                    src={logo7}
                                    className="d-block w-100 carosalImages"
                                    alt="3rd_img"
                                  />
                                </div>
                              </div>

                              <div className="d-flex justify-content-center">
                                <Link to="/products">
                                  <button className="SeeMorebutton">See More On Products</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item list_style LI">
                      <Link className="nav-links_li_a" to="/refundpolicy">
                        REFUND POLICY
                      </Link>
                    </li>
                    {/* <li className="nav-item list_style LI">
                      <Link className="nav-links_li_a" to="/termofservices">
                        TERMSOFSERVICES
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* Cart */}
        {/* <div className="col-3 cart-col d-flex justify-content-end">
          <a href="#" className="cart_anchor">
            <i className="fa-solid fa-cart-shopping fs-2"></i>
            <div className="cart_counter">
              <p className="cart_number">3</p>
            </div>
          </a>
        </div> */}
        <div className="col-3 d-flex justify-content-end gap-1 search-cart-col">
      <Link to="/login" className="icon-link" style={{ color: '#000000', fontSize: '1rem', marginBottom: '0px', marginRight: '7px' }}>
        <svg width="14.5" height="14.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.7406 17.8752C18.3411 15.4644 16.1011 13.655 13.4499 12.7939C14.7207 12.0383 15.7082 10.8863 16.2608 9.51495C16.8134 8.14362 16.9004 6.62881 16.5086 5.20321C16.1167 3.77762 15.2677 2.5201 14.0918 1.62385C12.916 0.727599 11.4784 0.242187 9.99994 0.242188C8.52148 0.242187 7.0839 0.727599 5.90807 1.62385C4.73223 2.5201 3.88317 3.77762 3.49133 5.20321C3.09949 6.62881 3.18653 8.14362 3.7391 9.51495C4.29166 10.8863 5.27918 12.0383 6.54994 12.7939C3.89879 13.655 1.65876 15.4644 0.259319 17.8752C0.200622 17.9603 0.160171 18.0567 0.140509 18.1582C0.120847 18.2598 0.122398 18.3643 0.145065 18.4652C0.167733 18.5661 0.211026 18.6612 0.272225 18.7446C0.333424 18.828 0.411206 18.8978 0.500683 18.9497C0.59016 19.0015 0.689399 19.0343 0.792163 19.046C0.894927 19.0577 0.998995 19.048 1.09783 19.0175C1.19666 18.987 1.28812 18.9365 1.36647 18.8689C1.44481 18.8014 1.50834 18.7184 1.55307 18.6252C2.4103 17.1439 3.64199 15.9141 5.12458 15.0591C6.60716 14.2042 8.28851 13.7541 9.99994 13.7541C11.7114 13.7541 13.3927 14.2042 14.8753 15.0591C16.3579 15.9141 17.5896 17.1439 18.4468 18.6252C18.4915 18.7184 18.5551 18.8014 18.6334 18.8689C18.7118 18.9365 18.8032 18.987 18.9021 19.0175C19.0009 19.048 19.105 19.0577 19.2077 19.046C19.3105 19.0343 19.4097 19.0015 19.4992 18.9497C19.5887 18.8978 19.6665 18.828 19.7277 18.7446C19.7889 18.6612 19.8322 18.5661 19.8548 18.4652C19.8775 18.3643 19.879 18.2598 19.8594 18.1582C19.8397 18.0567 19.7993 17.9603 19.7406 17.8752V17.8752ZM4.74994 7.00016C4.74994 5.96181 5.05785 4.94678 5.63473 4.08342C6.21161 3.22006 7.03154 2.54715 7.99086 2.14979C8.95017 1.75243 10.0058 1.64847 11.0242 1.85104C12.0426 2.05361 12.978 2.55363 13.7123 3.28785C14.4465 4.02208 14.9465 4.95754 15.1491 5.97594C15.3516 6.99434 15.2477 8.04994 14.8503 9.00925C14.453 9.96856 13.78 10.7885 12.9167 11.3654C12.0533 11.9423 11.0383 12.2502 9.99994 12.2502C8.60756 12.2502 7.2722 11.697 6.28763 10.7125C5.30307 9.72791 4.74994 8.39255 4.74994 7.00016Z"
            fill="#414042"
          ></path>
        </svg>
      </Link>

      <span id="searchIconOutside" className="searchHover">
        <i className="bi bi-search InsmallScreen" style={{ fontSize: '14px' }}></i>
      </span>

      <Link to="/cart" className="icon-link" style={{ color: '#000000', position: 'relative' }}>
        <svg className="icon-cart" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" height="0px" viewBox="0 0 40 40" fill="none">
          <path
            d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
        {cartTotalQuantity > 0 && (
          <span id="cart-counter" className="cart_icon_counter__" style={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '5px 10px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {cartTotalQuantity}
          </span>
        )}
      </Link>

      <Link to="/wishlist" className="icon-link" style={{ color: '#000000' }}>
        <svg className="bi bi-heart" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="none">
          <path
            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
            fill="currentColor"
            fillRule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
