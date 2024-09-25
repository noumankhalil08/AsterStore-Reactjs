import React, { useState } from 'react';
import ShoppingCards from '../Components/ShoppingCards';

const Sale = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 }); // Default price range

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prevRange) => ({
      ...prevRange,
      [name]: Number(value), // Convert value to number
    }));
  };

  const applyFilters = () => {
    // Optionally handle more complex filtering logic
  };

  return (
    <div className="container-fluid Sale_page">
      <div className="row">
        <div className="col-12">
          <h2 className="sale_pg_heading">Sale</h2>
        </div>
      </div>

      {/* Filter button and heading */}
      <div className="container">
        <div className="row filter_row">
          {/* Filter button */}
          <div className="col-7 filter_col">
            <button
              className="btn filter_btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                style={{ width: '100%', height: '20px', outlineColor: '#FFFFFF' }}
              >
                <path
                  fillRule="evenodd"
                  d="M4.833 6.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0ZM4.05 7H2.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1H8.95a2.5 2.5 0 0 1-4.9 0Zm11.117 6.5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0ZM13.5 11a2.5 2.5 0 0 1 2.45 2h1.55a.5.5 0 0 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h8.55a2.5 2.5 0 0 1 2.45-2Z"
                  fill="currentColor"
                />
              </svg>
              Filter
            </button>

            {/* Filter offcanvas */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
              style={{ backgroundColor: '#eff0f5' }}
            >
              {/* Filter heading */}
              <div className="offcanvas-header p-0 pb-2 border-bottom" style={{ height: '13.5%' }}>
                <div>
                  <h5
                    className="offcanvas-title"
                    id="offcanvasRightLabel"
                    style={{
                      fontWeight: 'bold',
                      fontSize: 'medium',
                      fontFamily: 'Questrial, sans-serif',
                      textAlign: 'center'
                    }}
                  >
                    Filter
                  </h5>
                  <span id="TotalProducts" className="Total_products" style={{ fontSize: 'small' }}>
                    26 products
                  </span>
                </div>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{ paddingLeft: '32px' }}
                />
              </div>

              {/* Filter body */}
              <div className="offcanvas-body">
                <div className="filter-item">
                  <a href="#priceFilter">
                    Price <span className="arrow"><i className="bi bi-arrow-right" /></span>
                  </a>
                </div>
                <div id="priceFilter" className="filter-item">
                  <h6>Price Range</h6>
                  <div className="filter-price-range">
                    <label htmlFor="minPrice">Min Price:</label>
                    <input
                      type="number"
                      id="minPrice"
                      name="min"
                      value={priceRange.min}
                      onChange={handlePriceChange}
                      style={{ margin: '0 10px' }}
                    />
                    <label htmlFor="maxPrice">Max Price:</label>
                    <input
                      type="number"
                      id="maxPrice"
                      name="max"
                      value={priceRange.max}
                      onChange={handlePriceChange}
                      style={{ margin: '0 10px' }}
                    />
                  </div>
                </div>
                {/* Other filters */}
                <div className="filter-item">
                  <a href="#colorFilter">
                    Color <span className="arrow"><i className="bi bi-arrow-right" /></span>
                  </a>
                </div>
                <div className="filter-item">
                  <a href="#sizeFilter">
                    Size <span className="arrow"><i className="bi bi-arrow-right" /></span>
                  </a>
                </div>
              </div>

              {/* Filter footer */}
              <div className="offcanvas-footer border-bottom">
                <footer>
                  <div className="filter_footer p-1">
                    <button className="removeAll">Remove all</button>
                    <span className="button_">
                      <a href="#">
                        <button
                          className="btn btn-outline-dark rounded-pill btn-no-hover"
                          type="button"
                          onClick={applyFilters}
                          style={{
                            borderWidth: '0rem',
                            width: '9.05rem',
                            fontWeight: 'lighter',
                            fontFamily: 'Questrial, sans-serif',
                            fontSize: '11.5px',
                            height: '36px',
                            color: '#eff0f5',
                            backgroundColor: '#0d6efd',
                            marginBottom: '7px'
                          }}
                        >
                          Apply
                        </button>
                      </a>
                    </span>
                  </div>
                </footer>
              </div>
            </div>
          </div>

          {/* Sort by: (sort by button) */}
          <div className="col-3 sort_by_col">
            <label htmlFor="sort_by" className="sortByLable">Sort by:</label>
            <select name="sort_by" className="sortByOptions">
              <option value="Date-new-to-old">Date, new to old</option>
              <option value="Featured">Featured</option>
              <option value="best-selling" selected>Best selling</option>
              <option value="Alphabetically-AZ">Alphabetically, A-Z</option>
              <option value="Alphabetically-ZA">Alphabetically, Z-A</option>
              <option value="Price-low-to-high">Price, low to high</option>
              <option value="Price-high-to-low">Price, high to low</option>
              <option value="Date-old-to-new">Date, old to new</option>
            </select>
          </div>

          {/* Total products heading */}
          <div className="col-2 total-products" style={{ paddingRight: '0px' }}>
            <span id="TotalProducts" className="Total_products">26 products</span>
          </div>
        </div>
      </div>
      <ShoppingCards minPrice={priceRange.min} maxPrice={priceRange.max} />
    </div>
  );
};

export default Sale;
