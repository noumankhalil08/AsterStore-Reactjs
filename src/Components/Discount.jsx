import React from 'react'
import { Link } from 'react-router-dom'


const Discount = () => {
  return (
    <>
    <div className="row discount_heading m-0" style={{ backgroundColor: '#eff0f5' }}>
      <h2>
        <b>Avail 20% Discount on selected items</b>
      </h2>
    </div>
    <div className="container-fluid btn_container" style={{ backgroundColor: '#eff0f5' }}>
      <span className="button_">
      <Link to="/sale">
          <button
            className="btn btn-outline-dark rounded-pill btn-no-hover"
            type="submit"
            style={{
              borderWidth: '0.09rem',
              width: '11.05rem',
              fontWeight: 'lighter',
              fontFamily: 'Questrial, sans-serif',
              fontSize: '14px',
              height: '45px',
              color: '#000000BF',
            }}
          >
            Explore Discounts
          </button>
        </Link>
      </span>
    </div>
    </>
  )
}

export default Discount
