import React from 'react'

function Slider() {
  return (



    <>
      <section>

        <div id="carouselExampleFade"  class="carousel slide carousel-fade"  >
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <div class="slide1 mb-sm-0 ">
                <img src={require('../Image/banner1.jpg')} className="d-block w-100" alt="..." />
                <div class="slide11">
                  <p>50% off in all products</p>
                  <h2> Woman Fashion</h2>
                  <button>SHOP NOW</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div class="slide1 d-sm mb-0">

                <img src={require('../Image/banner2.jpg')} className="d-block w-100" alt="..." />

                <div class="slide11">

                  <h2> Man Fashion</h2>
                  <button>SHOP NOW</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div class="slide1 d-sm-6 ">

                <img src={require('../Image/banner6.jpg')} className="d-block w-100" alt="..." />

                <div class="slide11 col order-2">
                  <p>Taking your Viewing Experience to Next Level</p>
                  <h2> Summer Sale</h2>
                  <button>SHOP NOW</button>

                </div>


              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>


      </section>

    </>
  )
}

export default Slider
