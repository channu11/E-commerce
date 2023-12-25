import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <section className='bgg mt-5'>
                <div className='container '>
                    <div className='row'>
                        <div class="col-lg-6 ftr   order-1">
                            <h3>Subscribe Our Newsletter</h3>
                        </div>
                        <div className="col-lg-6 text-end col order-2">
                            <div className='frm1' >
                                <form className="d-flex frm2" role="search">
                                    <input className=" w-50 form-control me-2" type="search" placeholder="Enter Email Address" aria-label="Search" />

                                </form>
                                <div className='susb'><h3>Suscribe</h3></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                </div>
            </section>


            <section className='lastone'>
                <div className='container '>
                    <div className='row'>
                        <div className='col-lg-3  col order-1 '>
                            <img className='mb-3' src={require('../Image/logo3.png')} />
                            <p className='ppp'>If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                            <div className='icons'>
                                <i class="bi bi-facebook"></i>
                                <i class="bi bi-twitter"></i>
                                <i class="fa-brands fa-google-plus-g"></i>
                                <i class="fa-brands fa-youtube"></i>
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                        <div className='col-lg-2 last1  col order-2'>
                            <h3>Useful Links</h3>

                            <Link to="#"><p>About Us</p> </Link>
                            <Link to="#"> <p>FAQ</p></Link>
                            <Link to="#"><p>Location</p></Link>
                            <Link to="#"><p>Affiliates</p></Link>
                            <Link to="#"><p>Contact</p></Link>
                        </div>
                        <div className='col-lg-2 last1  col order-3'>
                            <h3>Category</h3>

                            <Link to="#"><p>Men</p> </Link>
                            <Link to="#"> <p>Woman</p></Link>
                            <Link to="#"><p>Kids</p></Link>
                            <Link to="#"><p>Best Saller</p></Link>
                            <Link to="#"><p>New Arrivals</p></Link>
                        </div>
                        <div className='col-lg-2 last1  col order-4'>
                            <h3>My Account </h3>

                            <Link to="#"><p>My Account</p> </Link>
                            <Link to="#"> <p>Discount</p></Link>
                            <Link to="#"><p>Returns</p></Link>
                            <Link to="#"><p>Orders History</p></Link>
                            <Link to="#"><p>Order Tracking</p></Link>
                        </div>
                        <div className='col-lg-3 last2 col-sm-12 text-center order-5'>
                            <h3>Contact Info </h3>

                            <Link to="#"><p>  <i class="bi bi-geo-alt me-2"></i>123 Street, Old Trafford,<br /> New South London , UK</p> </Link>
                            <Link to="#"> <p className='email'> <i class="bi bi-envelope me-2"></i>info@sitename.com</p></Link>
                            <Link to="#"><p> + 457 789 789 65</p></Link>

                        </div>
                    </div>
                    <hr/>
                <div className="d-flex justify-content-between pt-5">
               
                    <div className='footerleft text-light'>© 2020 All Rights Reserved by Bestwebcreator</div>
                    <div className='footerright '>
                        <img className='me-1' src={require('../Image/visa1.png')}/>
                        <img  className='me-1' src={require('../Image/discover.png')}/>
                        <img  className='me-1' src={require('../Image/master_card.png')}/>
                        <img  className='me-1' src={require('../Image/paypal.png')}/>
                        <img  src={require('../Image/amarican_express.png')}/>
                    </div>

                </div>
                </div>
               

            </section>


        </>
    )
}

export default Footer
