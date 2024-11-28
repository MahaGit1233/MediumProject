import React, { useContext, useState } from "react";
import ChocolateItemsDisplay from "./ChocolateItemsDisplay";
import './ChocolateListItem.css';
import CartContext from "../Store/cart-context";

const ChocolateListItem = (props) => {

    const cartCtx = useContext(CartContext);


    const addToCartHandler = (quantity,chocolate) => {
        
        cartCtx.addItem({
            id: chocolate.id,
            name: chocolate.name,
            description: chocolate.description,
            price: chocolate.price,
            quantity: quantity,
        });
    }

    return (
        <ul>
            <li>
                {props.chocolate.map(adding => (
                    <ChocolateItemsDisplay key={adding.id} id={adding.id}>{adding.name} - {adding.description} - {adding.price}Rs   <div className="BtnDiv">{[1,2,3].map((qnty)=>(
                        <button key={qnty} onClick={()=>addToCartHandler(qnty,adding)}>Buy {qnty}</button>
                    ))}</div></ChocolateItemsDisplay>
                ))}
            </li>
        </ul>
    )
}

export default ChocolateListItem;