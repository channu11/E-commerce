import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import CatData from '../Data/CatData'
import { Link } from 'react-router-dom'
function Category() {
    let { cid } = useParams()
    var [post, setPost] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${cid}`)
      .then((res) => res.json()).then((data) => setPost(data));


  }, [])
    return (
        <>
            <div className="container">
                <h1>{cid}</h1>
                <div className="row  pt-3">
                    {post.map((itmes) => (
                        <div className="col-lg-3 mt-3">
                            <div className="card ">
                                <img className='w-100 prdct ' src={itmes.image} />
                              <p className='ps-4 pt-4 fw-bold'>${itmes.price}<span className='text-dark ps-4'> <del>$95.00</del> 20% off</span></p>
                                <p className="aa ps-4 ">{itmes.title}</p>

                                <p className=" ps-4 price">
                                    <i class="bi bi-star-fill me-1 text-warning"></i>
                                    <i class="bi bi-star-fill me-1 text-warning"></i>
                                    <i class="bi bi-star-fill me-1 text-warning"></i>
                                    <i class="bi bi-star-fill me-1 text-warning"></i>
                                    <i class="bi bi-star me-1 text-warning"></i>
                                    
                                    </p>

                                    <div className='text-start mb-2'>
                                    <Link to={`/details/${itmes.id}`}> 
                                    
                                    </Link>
                                    </div>
                                
                            </div>


                        </div>

                    ))}

                </div>
            </div>
        </>
    )
}

export default Category
