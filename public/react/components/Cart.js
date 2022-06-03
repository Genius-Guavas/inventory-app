import React, { useState, useEffect } from 'react';
import apiURL from '../api';
import { Items } from './Items';

export const Cart = ({cart, setCart, setShowCart}) => {


	
    console.log(cart)
    console.log()
	return <>
	<div><button  className='header' onClick={()=>{setShowCart(false)}}>Home</button>
	</div>
<div>
</div>
	<div>
        {cart.map(product =><div><h4>{product.title}</h4><h4>{product.price}</h4><img src={product.image} alt={product.title}/>
        </div>)}
    </div>
    <div>
        <h2>Total</h2>
        <div>{
            
            }

        </div>
        <button>Check Out</button>
    </div>
	</> 
} 
