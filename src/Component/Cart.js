import React from 'react'
import { useSelector } from 'react-redux'
import CatData from '../Data/CatData';
function Cart() {
    const {cartItems}=useSelector((state)=>state.cart);
    console.log(cartItems)
  return (
    <div className='container'>
        <h1>Cart</h1>
        {cartItems.map((a)=>(
            <div className='card py-5'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img className='w-100 prdct' src={a.image}/>
                    </div>
                    <div className='col-lg-6'>
                        <h3>{a.title}</h3>
                        <p className='pt-2'>{a.description}</p>
                        <p className='pt-3 fw-bold text-warning-emphasis'>${a.price}</p>
                    </div>
                </div>
            </div>
        ))}
      
    </div>
  )
}

export default Cart
