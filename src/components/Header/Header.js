import React, { useContext, useState } from "react";
import CartContext from "../Store/cart-context";
import './Header.css';
import Cart from "../Cart/Cart";

const Header = () => {
    const cartCtx = useContext(CartContext);
    const [showCart, setShowCart] = useState(false);

    let quantity = 0;
    cartCtx.items.forEach((item) => quantity = quantity + Number(item.quantity));

    const cartHandler = () => {
        setShowCart((prevState) => !prevState);
    }

    const closeBtnHandler=()=>{
        setShowCart(false);
    }

    return (
        <div>
            <header>
                <button onClick={cartHandler}>Cart <span>{quantity}</span></button>
            </header>
            {showCart && <Cart onClose={closeBtnHandler}/>}
        </div>
    )
}

export default Header;