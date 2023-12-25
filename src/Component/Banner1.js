import React from 'react'

function Banner1() {
  return (
    <>
      <section className='bg1'>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-6  bner col-sm-12 col-sm mt-5'>
          <img  width={250} src={require('../Image/banner7.png')}/>
          </div>
          <div className='col-lg-6 bnr11 col-sm-12 col-sm mb-5'>
            <p className='p1'>New season trends!</p>
            <h3 className='fw-bold fs-2'> Best Summer Collection</h3>
            <p className='fw-bold'>Sale Get up to 50% Off</p>
            <button>Shop Now</button>
          </div>
        </div>

        </div>
     
      </section>
    </>
  )
}

export default Banner1
