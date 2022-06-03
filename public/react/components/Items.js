import React, {useState} from 'react';
import apiURL from '../api';
export const Items = ({ item, setSingleItem}) => {
  const handleClick = async () => {
    const response = await fetch(`${apiURL}/items/${item.id}`);
    const itemData = await response.json();
    setSingleItem(itemData);

  }
  function addToCart(item){
    item.cart = 'Y'
    console.log(item.cart)
    console.log(item.price)
  }

  return <>
    <div  className="all">
    <img src={item.image} alt={item.title} />
      <h3 className='title'>{item.title}</h3>
      <h4>${item.price}</h4>
      <div>
      <button onClick={handleClick}>Details</button>
      </div>
    </div>
  </>
}
