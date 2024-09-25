import React from 'react'

const Header = () => {
  return (
   <>
    <div style={{ background: '#eff0f5' }}>
      {/* Starting Messages */}
      <div className="container-fluid" id="messagesContainer" style={{ backgroundColor: '#eed9fd' }}>
        <div className="row satrting_msg m-0 p-0">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <span>Welcome to Aster Store</span>
              </div>
              <div className="carousel-item">
                <span style={{ fontWeight: 'bolder', fontFamily: "'Times New Roman', Times, serif" }}>
                  اللَّهُ لَطِيفٌ بِعِبَادِهِ يَرْزُقُ مَن يَشَاءُ
                </span>
              </div>
              <div className="carousel-item">
                <span>Avail 20% discount on selected items</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Header
