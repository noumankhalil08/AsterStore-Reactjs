import React from 'react'
import logo1 from '../PICTURES/images.jpg'
import logo2 from '../PICTURES/images.jpg'
import logo3 from '../PICTURES/images.jpg'

const FirstPic = () => {
  return (
    <>
     <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={logo1} className="d-block w-100" alt="banner" />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={logo2} className="d-block w-100" alt="banner" />
        </div>
        <div className="carousel-item">
          <img src={logo3} className="d-block w-100" alt="banner" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
    
    </>
  )
}

export default FirstPic
