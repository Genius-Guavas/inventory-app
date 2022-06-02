import React,{useState} from "react";
import { Items } from "./Items";

function Cart({cart}){

return(
<div className="cart-items">Cart Items
    {cart.length===0 && ( <div className="cart-items">No items are added </div>)}

    <div>
     {cart.map((item)=>{
         <div key={items.id}className="cart-item-list">
             <img className="cart-img" src={items.image} alt={items.name}/>
         </div>
     })}
    </div>
</div>

)

 
}
export default Cart;