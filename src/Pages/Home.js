import React from 'react'
 import Banner from '../Component/Banner'
import Banner1 from '../Component/Banner1'

//  import Carsol from '../Component/Carsol'
import Product from '../Component/Product'
import Products from '../Component/Products'
import Slider from '../Component/Slider'
import Slider1 from '../Component/Slider1'
import Upfooter from '../Component/Upfooter'




function Home() {
  return (
    <>
   
   <Slider/>
   <Banner/>
  <Products/>
    <Product title="men's clothing"/>
    <Product title="jewelery"/>
    <Product title="electronics"/>
    {/* <Product title="women's clothing"/> */}
    <Banner1/>
      
    <Slider1/>
 
    <Upfooter/>

   

    </>
  )
}

export default Home
