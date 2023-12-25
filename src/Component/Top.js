import React from 'react'

import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Navbar';





function Top() {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div className="container">

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 ">

              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img className='flage me-1'width={20} src={require('../Image/aus.png')} /> English
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><img className='rounded-circle  me-1'width={20} src= {require('../Image/aus.png') } />English</a></li>
                  <li><a className="dropdown-item" href="#"> <img className='flage me-1'width={20} src={require('../Image/frnce.png')} />France </a></li>

                  <li><a className="dropdown-item" href="#"> <img className='flage me-1' width={20} src={require('../Image/usa.png')} />United States </a></li>
                </ul>
              </li>
              <li className="nav-item dropdown bbbb">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  USD
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item" href="#">USD</a></li>
                  <li><a className="dropdown-item" href="#">EBR </a></li>

                  <li><a className="dropdown-item" href="#">GBR  </a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="bi bi-phone "></i>123-456-7890 </a>
              </li>

            </ul>

          </div>
          <div className=' right d-flex justify-content-end px-3 ' >
            <div className=' tright'>
            <a href="#"><i class="bi bi-shuffle me-1 "></i>Compare</a>
            </div>
            <div className=' tright  '>
              <a href="#"><i class="bi bi-heart  me-1"></i> Wishlist </a>
            </div>
            <div className=' tright  '>
             
              <a href="#"><i class="bi bi-person me-1 "></i>Login </a>
            </div>
          </div>
          
        </div>

      </nav>
<Navbar/>


    </>
  )
}

export default Top
