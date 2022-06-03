import React, { useState } from 'react';
import { Items } from './Items';

export const ItemsList = ({items, setSingleItem, setIsAddingItem, setShowCart, cart, setCart}) => {
	
	
	return <>
	<div><button  className='header' onClick={()=>{setIsAddingItem(true)}}>
		Add an Item
	</button>
	<button className="header" onClick={()=>{setShowCart(true)}}>Cart</button>
	</div>
		{
			items.map((item, idx) => {
				return <Items item={item} key={idx} setSingleItem={setSingleItem} setCart={setCart} cart={cart}/>
			})
		}
	
	</> 
} 


