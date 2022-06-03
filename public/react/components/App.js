import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { ItemView } from './ItemView';
import { Form } from './Form';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [addCart, setAddCart] = useState([])
	const [singleItem, setSingleItem] = useState(0);
	const [isAddingItem, setIsAddingItem] = useState(false);
	
	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			setItems(itemsData);
			console.log(items)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	async function fetchCart(){
		try {
			const response = await fetch(`${apiURL}/items/cart`);
			const cartData = await response.json();
			setCart(cartData);
			console.log(cart)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems(); 
	}, [singleItem, isAddingItem]);

	return (
		<main>	
      <h1 id="title">Store Warehouse <br></br><button className= "cart-button" onClick={fetchCart}>Cart ({addCart.length})</button>
	  </h1>
	  	

			{
			isAddingItem? <Form setIsAddingItem={setIsAddingItem}/> :singleItem ? 
			<ItemView singleItem={singleItem} setSingleItem={setSingleItem}/>:
			<ItemsList setIsAddingItem={setIsAddingItem} items={items} setSingleItem={setSingleItem}/>
			
			}

		</main>
	)
}