import { createContext, useEffect, useState } from "react";

import axios from "axios";

/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  const getProducts = async () => {
    await axios.get("https://apple-commerce-api.herokuapp.com/api/products").then(({ data }) => {
      setProducts(data.products);
      setNewProducts(data.products);
    });
  };

  const getProductsCart = async () => {
    return await axios
      .get("https://apple-commerce-api.herokuapp.com/api/products/cart")
      .then(({ data }) => setCartItems(data.productsCart))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    const { name, img, price } = product;

    await axios.post("https://apple-commerce-api.herokuapp.com/api/products/cart", {
      name,
      img,
      price,
    });

    getProducts();
    getProductsCart();
  };

  const editItemToCart = async (id, query, amount) => {
    if (query === "del" && amount === 1) {
      await axios
        .delete(`https://apple-commerce-api.herokuapp.com/api/products/cart/${id}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(`https://apple-commerce-api.herokuapp.com/api/products/cart/${id}?query=${query}`, {
          amount,
        })
        .then(({ data }) => console.log(data));
    }

    getProducts();
    getProductsCart();
  };

  const deleteAllInCart = async () => {
    await axios.delete("https://apple-commerce-api.herokuapp.com/api/products/cart");

    getProducts();
    getProductsCart();
  };

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{
        cartItems,
        products,
        newProducts,
        setNewProducts,
        addItemToCart,
        editItemToCart,
        deleteAllInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
