import "./App.scss";

import { CartProvider } from "./context/CartContext";
import Home from "./components/Home";
import Nav from "./components/Nav";
import React from "react";

const App = () => {
  /* Envolvemos la home con el provider del context */
  return (
    <CartProvider>
      <Nav />
      <Home />
    </CartProvider>
  );
};

export default App;
