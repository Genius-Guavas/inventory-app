import React from 'react';
import apiURL from '../api';

export const Items = ({ item, setSingleItem, cart, setCart}) => {
  const handleClick = async () => {
    const response = await fetch(`${apiURL}/items/${item.id}`);
    const itemData = await response.json();
    setSingleItem(itemData);

  }
  async function addToCart(product){
    try {
        await setCart([...cart, product])
    }
    catch(err)
    {
        console.log(err)
    }
  }
  
  return <>
    <div  className="all">
    <img src={item.image} alt={item.title} />
      <h3 className='title'>{item.title}</h3>
      <h4>${item.price}</h4>
      <div>
      <button onClick={handleClick}>Details</button>
      <button onClick={()=>{addToCart(item)}}>Add to Cart</button>
      </div>
    </div>
  </>
}
