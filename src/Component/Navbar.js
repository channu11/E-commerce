import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';

import {Badge} from 'react-bootstrap'
import Cart from './Cart';
import { useSelector } from 'react-redux';

import Category from './Category';
import Details from './Details';


function Navbar() {
  const {quantity}=useSelector((state)=>state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/"><img class="w-100" src={require('../Image/logo_dark.png')} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-danger" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  HOME
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item text-danger" href="#">Fashion 1</a></li>
                  <li><a className="dropdown-item" href="#">Fashion2 </a></li>

                  <li><a className="dropdown-item" href="#">Furniture 1 </a></li>
                  <li><a className="dropdown-item" href="#">Furniture 2 </a></li>

                  <li><a className="dropdown-item" href="#">Electronic 1 </a></li>
                  <li><a className="dropdown-item" href="#">Electronic 2 </a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PAGES
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">About Us</a></li>
                  <li><a className="dropdown-item" href="#">contact Us </a></li>

                  <li><a className="dropdown-item" href="#">Faq</a></li>
                  <li><a className="dropdown-item" href="#">404 Error page</a></li>
                  <li><a className="dropdown-item" href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Register</a></li>
                  <li><a className="dropdown-item" href="#">Term and Conditions</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown has-megamenu">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PRODUCTS
                </a>
                <ul className="dropdown-menu">
                  <div className='row '>
                    <div className='col-lg-4 border-end '>

                      <ul>
                        <li><a className="dropdown-item fw-bold" href="#">
                          Women's</a></li>
                        <li><a className="dropdown-item" href="#">
                          Vestibulum Sed</a></li>
                        <li><a className="dropdown-item" href="#">Donec Porttitor</a></li>

                        <li><a className="dropdown-item" href="#">Donec Vitae Facilisis</a></li>
                        <li><a className="dropdown-item" href="#">Curabitur Tempus</a></li>
                        <li><a className="dropdown-item" href="#">Vivamus In Tortor</a></li></ul>
                    </div>
                    <div className='col-lg-4 border-end'>
                      <ul> <li><a className="dropdown-item" href="#">MAN's</a></li>


                        <li><a className="dropdown-item" href="#">Donec Vitae Ante Ante</a></li>

                        <li><a className="dropdown-item" href="#">Etiam Ac Rutrum</a></li>
                        <li><a className="dropdown-item" href="#">Quisque Condimentum</a></li>
                        <li><a className="dropdown-item" href="#">Curabitur Laoreet</a></li>
                        <li><a className="dropdown-item" href="#">Vivamus </a></li>
                      </ul>
                    </div>
                    <div className='col-lg-4 border-end'>
                      <ul> <li><a className="dropdown-item" href="#">KID's</a></li>




                        <li><a className="dropdown-item" href="#">Donec Vitae </a></li>

                        <li><a className="dropdown-item" href="#">
                          Quisque Condime</a></li>
                        <li><a className="dropdown-item" href="#">
                          Etiam Ac Rutrn</a></li>
                        <li><a className="dropdown-item" href="#">LiDonec Vitae </a></li>
                        <li><a className="dropdown-item" href="#">Donec Porttitor</a></li>
                      </ul>
                    </div>
                    {/* <div className='col-lg-3 border-end' >
                      <ul> <li><a className="dropdown-item" href="#">ACCESSORIES</a></li>
                        <li><a className="dropdown-item" href="#">Donec Vitae Facilisis</a></li>

                        <li><a className="dropdown-item" href="#">Quisque Condimentum</a></li>
                        <li><a className="dropdown-item" href="#">Etiam Ac Rutrum</a></li>
                        <li><a className="dropdown-item" href="#">Donec Vitae Ante Ante</a></li>
                        <li><a className="dropdown-item" href="#">Donec Porttitor</a></li>
                        <li><a className="dropdown-item" href="#">List</a></li>

                      </ul>

                    </div> */}
                  </div>
                  <div className='row mt-2 '>
                    <div className='col-lg-3'>
                      {/* <div className='mm'> */}
                      <img className='w-100 ms-5 ' src={require('../Image/menu_banner1.jpg')} />
                      {/* <div className='nn'>
                          <p>10% Off</p>
                          <p>New Arrival</p>
                          <p>Shop Now</p>
                        </div>
                      </div> */}
                    </div>
                    <div className='col-lg-3'><img className='w-100 ms-5' src={require('../Image/menu_banner2.jpg')} /></div>
                    <div className='col-lg-3'><img className='w-100 ms-5' src={require('../Image/menu_banner3.jpg')} /></div>
                  </div>
                </ul>
                
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  BLOG
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Grids</a></li>
                  <li><a className="dropdown-item" href="#">Mansonry</a></li>

                  <li><a className="dropdown-item" href="#">Single Post</a></li>
                  <li><a className="dropdown-item" href="#">List</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown has-megamenu">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SHOP
                </a>
                {/* <ul className="dropdown-menu">
                  <div className='row '>
                    <div className='col-lg-3 '>
                      <ul>
                        <li><a className="dropdown-item" href="#">Grids</a></li>
                        <li><a className="dropdown-item" href="#">Mosonry</a></li>

                        <li><a className="dropdown-item" href="#">Single Post</a></li>
                        <li><a className="dropdown-item" href="#">List </a></li>
                      </ul>
                    </div>
                    <div className='col-lg-3'>
                      <ul> <li><a className="dropdown-item" href="#">Grids</a></li>
                        <li><a className="dropdown-item" href="#">Mosonry</a></li>

                        <li><a className="dropdown-item" href="#">Single Post</a></li>
                        <li><a className="dropdown-item" href="#">List</a></li></ul>
                    </div>
                    <div className='col-lg-3 '>
                      <ul> <li><a className="dropdown-item" href="#">Grids</a></li>
                        <li><a className="dropdown-item" href="#">Mosonry</a></li>

                        <li><a className="dropdown-item" href="#">Single Post</a></li>
                        <li><a className="dropdown-item" href="#">List</a></li></ul>
                    </div>
                    <div className='col-lg-3 text-center pe-5' >
                      <ul> <li><a className="dropdown-item" href="#">Grids</a></li>
                        <li><a className="dropdown-item" href="#">Mosonry</a></li>

                        <li><a className="dropdown-item" href="#">Single Post</a></li>
                        <li><a className="dropdown-item" href="#">List</a></li></ul>
                    </div>
                  </div>
                </ul> */}
              </li>


              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT US</a>
              </li>
            </ul>
            </div>
            <i class="bi bi-search  icon me-4 fs-5  "></i>
            <div class="Cart  ">


              
              <div className='crt'>
            
                <Link className='btn position-relative' to="/cart">
                  <i class="bi bi-cart3  icon me-5 fs-5 "></i><Badge className='bg-danger badge rounded-circle'>{quantity}</Badge>

                </Link>
                </div>




            </div>
          </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/cat/:cid" element={<Category />} />
        <Route path="/details/:pid" element={<Details />} />


      </Routes>
      
    </>
  )
}

export default Navbar