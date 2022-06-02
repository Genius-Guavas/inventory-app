import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { ItemView } from './ItemView';
import { Form } from './Form';
// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setItems] = useState([]);
	const [singleItem, setSingleItem] = useState(0);
	const [isAddingItem, setIsAddingItem] = useState(false);
	const [cart, setCart]= useState([])

	const handleCart=(product)=>{
		const ProductExist = cart.find((item)=>item.id===product.id);
		if(ProductExist){
		setCart(cart.map((item)=>item.id ===product.id ? {
			...ProductExist, quantity : ProductExist.quantity +1
		} :item ))
	}else {
			setCart([...cart,{...product, quantity : 1}])
		 };
		}
	
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
      <h1 id="title">Store Warehousen
	  </h1>
	  <button>Cart</button>	

			{isAddingItem? <Form setIsAddingItem={setIsAddingItem}/> :singleItem ? <ItemView singleItem={singleItem} setSingleItem={setSingleItem}/>:<ItemsList setIsAddingItem={setIsAddingItem} items={items} setSingleItem={setSingleItem}/>}
		</main>
	)
}