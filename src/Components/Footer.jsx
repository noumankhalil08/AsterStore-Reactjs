import React from 'react';
import logo1 from '../PICTURES/return-box (1).png'
import logo2 from '../PICTURES/delivery-truck.png'
import logo3 from '../PICTURES/Aster_Logo_Transparent footer.png'





const Footer = () => {
  return (
    <>
     <div className="footer-sticker bg-color-nav " style={{ backgroundColor: '#eed9fd' }} id="footer_sticker">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-item">
              <div className="icon">
                <img src={logo1} alt="return-logo" className="returnLOGO" />

              </div>
              <h5 className="footer_heading">
                <b className="fw-bold">Simply return</b>&nbsp; it within 15 days for an exchange
              </h5>
            </div>
            <div className="col-md-4 footer-item">
              <div className="icon">
                <img src={logo2} alt="shipping logo" className="img-fluid shippingLOGO" />
              </div>
              <h5 className="footer_heading">
                <b className="fw-bold">Flat</b>&nbsp; shipping rate Rs. 100/-
              </h5>
            </div>
            <div className="col-md-4 footer-item newsletter">
              <div className="d-flex flex-column justify-content-center align-items-center flex-wrap">
                <h5 className="Subcribe">
                  <b className="fw-bold">Subscribe</b>&nbsp;to our newsletter
                </h5>

                <div className="email-bar">
                  <input type="email" placeholder=" " id="emailInput" />

                  <label htmlFor="emailInput" className="floating-email-label">
                    Email
                  </label>

                  <span>
                    <i className="bi bi-arrow-right arrowIconInside" style={{ fontSize: '0.8rem', marginRight: '10px' }}></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer bg-color-nav" style={{ paddingLeft: '60px' }}>
        <div className="container border-bottom pt-4 m-0 pb-3">
          <div className="row g-0" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <div className="col-md-4 footerH5 InSmallScreens">
              <h5>INFORMATION</h5>
              <ul className="footer-menu">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Shipping and Handling</a></li>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">Store Locator</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Catalogs</a></li>
              </ul>
              <div className="footer-logo">
                <img src={logo3} className="footer-logo" alt="Footer Logo" />
              </div>
            </div>
            <div className="col-md-4 footerH5 bg-color-nav">
              <h5>CUSTOMER CARE</h5>
              <ul className="footer-menu">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="RefundPolicy.html">Return & Exchange</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Disclaimer</a></li>
              </ul>
            </div>
            <div className="col-md-4 footerH5 bg-color-nav">
              <h5>CONTACT US</h5>
              <ul className="footer-menu">
                <li>Phone: 0213-7130271</li>
                <li>Email: care@alkaramstudio.com</li>
                <li>WhatsApp: 0312-2552726</li>
                <li>Customer Care:</li>
                <li>Monday to Friday 9 am to 6 pm</li>
                <li>Saturday 9 am to 3 pm</li>
              </ul>
              <div className="social-icons">
      <div className="d-flex gap-4">
        <a href="#" aria-label="Facebook">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="#" aria-label="WhatsApp">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="container-fluid p-3 bg-color-nav">
        <div className="row">
          <div className="col-12 copyrigh_section">
            <p>© 2024,</p>
            <a href="index.html"> AsterStore.pk •</a>
            <a href="RefundPolicy.html"> Refund policy •</a>
            <a href="TermOfServices.html"> Terms of service</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

