import React, { useContext } from "react";
import ReactDOM from 'react-dom';
import CartContext from "../Store/cart-context";
import './Cart.css';


const Backdrop = (props) => {
    const cartCtx = useContext(CartContext);

    const deleteFromCartHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItems = cartCtx.items.map((item, index) => (
        <div key={index} className="cartItems">
            <p style={{ fontWeight: 'bold', fontSize: '22px' }}>{item.name}</p>
            <div className="cartItemsControls">
                <p style={{ color: '#8a2b06' }}>₹{item.price} <span>x {item.quantity}</span></p>
                <div className="controls">
                    <button className="minus" onClick={()=>deleteFromCartHandler(item.id)}>-</button> 
                    <button>+</button>
                </div>
            </div>
        </div>
    ));

    const totalAmount = cartCtx.totalAmount.toFixed(2);

    return <div className="backdrop">
        <div className="cart">
            <div className="name"><p>{cartItems}</p></div>
            <div className="amount">
                <h2>Total Amount <span>₹{totalAmount}</span></h2>
            </div>
            <div className="buttons">
                <button className="button1" onClick={props.onClose}>Close</button>
                <button className="button2">Order</button>
            </div>
        </div>
    </div>
}

const Cart = (props) => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById("backdrop-root"))}
    </React.Fragment>
}

export default Cart;