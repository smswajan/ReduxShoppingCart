import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import { createStore } from "redux";
import reducer from "./reducer";
// react-redux - provider - wraps app, connect - used in components
// initial store
const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 0,
};
// store
const store = createStore(reducer, initialStore);
function App() {
    return (
        <main>
            <Navbar />
            <CartContainer cart={cartItems} />
        </main>
    );
}

export default App;
