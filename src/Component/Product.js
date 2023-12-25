import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {addToCart} from '../redux/cartSlice'


function Product(props) {
  const dispatch = useDispatch();
  var [post, setPost] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${props.title}`)
      .then((res) => res.json()).then((data) => setPost(data));


  }, [])


  return (
    <>
      <div className="container">


        <div className="row  pt-3">
          {post .slice(0,4).map((a) => (
            <div className="col-lg-3 col-sm-6 mb-sm-3">
              <div className="card  d-sm-my-3">
                <img className='w-100 prdct ' src={a.image} />
                <div className='animation'>
<Link to='/' onClick={()=>dispatch(addToCart(a))}><i class="bi bi-cart3 car add"></i></Link>
                  {/* <Link to='/'> <i class="bi bi-cart3 car add"></i></Link> */}
                  <Link to={`/cat/${a.category}`}><i className="bi bi-shuffle pe-2 car add cate "></i></Link>
                  <Link to={`/details/${a.id}`}><i className="bi bi-zoom-in pe-2 car add det"></i></Link>
                </div>
                <p className="fw-bold ps-4 pt-4">{a.title}</p>
                <p className='ps-4 fw-bold mb-0 pb-0 '>${a.price}</p>
                <span className='text-dark fw-bold ps-4 '> <del>$95.00</del> 20% off</span>
                <p className=" ms-4 price">
                  <i class="bi bi-star-fill me-1 text-warning"></i>
                  <i class="bi bi-star-fill me-1 text-warning"></i>
                  <i class="bi bi-star-fill me-1 text-warning"></i>
                  <i class="bi bi-star-fill me-1 text-warning"></i>
                  <i class="bi bi-star me-1 text-warning"></i>
                  </p>
                  <span><button className='btn ms-4 mb-1 crt' onClick={()=>dispatch(addToCart())} >Add to Cart</button></span>
                  
                


              </div>


            </div>

          ))}

        </div>
      </div>
    </>
  )
}

export default Product