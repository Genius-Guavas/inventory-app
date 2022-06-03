import React, { useState, useEffect } from 'react';
import apiURL from '../api';
import { Items } from './Items';

export const Cart = ({cart, setCart, setShowCart}) => {

  var prices = cart.map(function(all){return all.price})
    function getTotal() {
        let initialValue = 0;

    }
	
    console.log(cart[0].price)
    console.log()
	return <>
	<div><button  className='header' onClick={()=>{setShowCart(false)}}>Home</button>
	</div>
<div>
</div>
	<div className='cart'>
        <div className='product'>
        {cart.map((product) =><div><h4>{product.title}</h4><h4>{product.price}</h4><img src={product.image} alt={product.title}/>
        </div>)}
    </div>
    <div>
        <h1>Total</h1>
        <div>
            <h2>
            {cart.reduce((acc, curr) => acc + Number(curr.price), 0).toFixed(2)}
            </h2>
        </div>
        <button>Check Out</button>
    </div>
    </div>
	</> 
} 
