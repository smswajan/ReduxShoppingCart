import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./cart-items";
import { createStore } from "redux";
import reducer from "./reducer";
// react-redux - provider - wraps app, connect - used in components
import { Provider } from "react-redux";
// initial store
const initialStore = {
    cart: cartItems,
    total: 162,
    amount: 46,
};
// store
const store = createStore(reducer, initialStore);
function App() {
    return (
        <Provider store={store}>
            <Navbar />
            <CartContainer />
        </Provider>
    );
}

export default App;
