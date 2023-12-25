import React from 'react'
import CatData from '../Data/CatData';
import { Routes, Route, Link, useParams } from "react-router-dom";

function Details() {
  let { pid } = useParams()
  let dtl = CatData.find((a) => a.id == pid)
  return (
    <>
      <div className='container py-5 my-5'>
       
        <div className='col-lg-3'>
          <div className='border px-4'>
            <div className='jwelery'>
              <img className='w-100 prdct' width={100} src={dtl.image} />
              <div className='small'>
                <img className='imga border m-3' width={100} src={dtl.image} />

                <img className='imgb border m-3' width={100} src={dtl.image} />
                <img className='imgc border m-3' width={100} src={dtl.image} />
              </div>

            </div>


            <p className="fw-bold text-center aa ">{dtl.title}</p>

            <p className=" text-center price fw-bold">
              <i class="bi bi-star-fill me-1 text-warning"></i>
              <i class="bi bi-star-fill me-1 text-warning"></i>
              <i class="bi bi-star-fill me-1 text-warning"></i>
              <i class="bi bi-star-fill me-1 text-warning"></i>
              <i class="bi bi-star me-1 text-warning"></i>
              ${dtl.price}<span className='text-dark'> <del>$95.00</del> 20% off</span></p>
            <span><button className='btn crt2  ms-1 mb-1' >Add to Cart</button></span>
          </div>

    <div>
  <p>
    <button className="btn btn-primary mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    <ins>More Details</ins>
    </button>
  </p>
  <div style={{minHeight: 120}}>
    <div className="collapse collapse-horizontal" id="collapseWidthExample">
      <div className="card card-body" style={{width: 300}}>
        <p className='text-success'>{dtl.size}</p>
        <p className='text-success'>{dtl.Brand}</p>
        <p className='text-success'>{dtl.color}</p>
      <p className='pt-2'> {dtl.description}</p>
      </div>
    </div>
  </div>
</div>


          
        

        </div>
      </div>

    </>
  )
}

export default Details
