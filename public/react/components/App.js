import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { ItemView } from './ItemView';
import { Form } from './Form';
import { Cart } from './Cart';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [cart, setCart] = useState([])
	const [showCart, setShowCart]= useState(false)
	const [singleItem, setSingleItem] = useState(0);
	const [isAddingItem, setIsAddingItem] = useState(false);
	
	
	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}


	useEffect(() => {
		fetchItems(); 
	}, [singleItem, isAddingItem]);

	return (
		<main>	
      <h1 id="title">Store Warehouse <br></br>
	  </h1>
	  	

			{showCart ? <Cart setShowCart={setShowCart} cart={cart} setCart={setCart}/> :
			isAddingItem? <Form setIsAddingItem={setIsAddingItem}/> :singleItem ? 
			<ItemView singleItem={singleItem} setSingleItem={setSingleItem} setShowCart={setShowCart} setCart={setCart} cart={cart}/>:
			<ItemsList setIsAddingItem={setIsAddingItem} items={items} setSingleItem={setSingleItem} setShowCart={setShowCart}/>
			
			}

		</main>
	)
}