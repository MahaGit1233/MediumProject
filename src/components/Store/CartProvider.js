import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items,setItems]=useState([]);
    const [totalAmount,setTotalAmount]=useState(0);

    const addItemToCartHandler = (item) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
            const existingItem = prevItems[existingItemIndex];
    
            let updatedItems;
            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    quantity: Number(existingItem.quantity) + Number(item.quantity),
                };
                updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems = prevItems.concat(item);
            }
    
            return updatedItems;
        });
    
        setTotalAmount((prevTotal) => prevTotal + item.price * item.quantity);
    };

    const removeItemFromCartHandler = (id) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((item) => item.id === id);
            const existingItem = prevItems[existingItemIndex];
            
            if (!existingItem) {
                return prevItems;
            }
    
            let updatedItems;
            if (existingItem.quantity === 1) {
                updatedItems = prevItems.filter((item) => item.id !== id);
            } else {
                const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
                updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = updatedItem;
            }
    
            return updatedItems;
        });
    
        setTotalAmount((prevTotal) => {
            const existingItem = items.find((item) => item.id === id);
            if (existingItem) {
                return prevTotal - existingItem.price;
            }
            return prevTotal;
        });
    };

    const cartContext = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;