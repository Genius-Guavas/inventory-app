import React, { useState, useEffect } from 'react';
import apiURL from '../api';
import { Items } from './Items';

export const Cart = ({items, addCart, setAddCart, setShowCart}) => {
	 async function fetchCart(){
		try {
			const response = await fetch(`${apiURL}/items/cart`);
			const cartData = await response.json();
			setAddCart([...addCart, cartData]);

		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	
	useEffect(() => {
		fetchCart(); 
	}, [addCart]);
	return <>
	<div><button  className='header' onClick={()=>{setShowCart(false)}}>Home</button>
	</div>
    
	
	</> 
} 
