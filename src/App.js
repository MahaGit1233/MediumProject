import React, { useState } from "react";
import ChocolateForm from "./components/Chocolate/ChocolateForm";
import ChocolateListItem from "./components/Chocolate/ChocolateListItem";
import Header from "./components/Header/Header";
import CartProvider from "./components/Store/CartProvider";

function App() {
  const [chocolate, setChocolate] = useState([]);

  const chocolateDataHandler = (enteredName, enteredDes, enteredPrice) => {
    const newChocolate = {
      name: enteredName,
      description: enteredDes,
      price: enteredPrice,
      id: Math.random(),
    };
    setChocolate((prevChocolate) => [...prevChocolate, newChocolate]);
  }

  return (
    <CartProvider>
      <Header />
      <ChocolateForm onChocolateData={chocolateDataHandler} />
      <ChocolateListItem chocolate={chocolate} />
    </CartProvider>
  );
}

export default App;
