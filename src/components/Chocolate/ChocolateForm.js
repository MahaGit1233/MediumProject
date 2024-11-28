import React, { useState } from "react";
import './ChocolateForm.css';

const ChocolateForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredDes, setEnteedDes] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [isValid, setIsValid] = useState(true);

    const nameChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredName(event.target.value);
    }

    const desChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteedDes(event.target.value);
    }

    const priceChangeHandler = (event) => {
        if (event.target.value>0) {
            setIsValid(true);
        }
        setEnteredPrice(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredName.length === 0 || enteredDes.length === 0 || enteredPrice <= 0) {
            setIsValid(false);
            return;
        }
        props.onChocolateData(enteredName,enteredDes,enteredPrice);
        setEnteredName('');
        setEnteedDes('');
        setEnteredPrice('');
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="name">Candy Name: </label>
            <input id="name" type="text" value={enteredName} onChange={nameChangeHandler}/>
            <label htmlFor="des">Description: </label>
            <input id="des" type="text" value={enteredDes} onChange={desChangeHandler}/>
            <label htmlFor="cost">Price: </label>
            <input id="cost" type="number" value={enteredPrice} onChange={priceChangeHandler}/>
            <button type="submit" className="button">Add</button>
        </form>
    )
}

export default ChocolateForm;