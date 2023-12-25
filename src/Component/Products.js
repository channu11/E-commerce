import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <>
    <div class="container">

    <h3 class="hh pt-5 text-center fw-bold">Exclusive Products</h3>
        <div class="list">
          <ul>
            <li> <Link to="#"> New Arrival</Link></li>
            <li> <Link to="#"> Best Sellers</Link></li>
            <li> <Link to="#"> Featured</Link></li>
            <li> <Link to="#">Special Offer</Link></li>
          </ul>
        </div>
    </div>
      
    </>
  )
}

export default Products