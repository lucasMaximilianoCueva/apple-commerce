import React, { useContext, useEffect } from "react";

import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  let { amount } = item;

  useEffect(() => {
    getWithFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWithFetch = async () => {
    amount = item.amount
  };

  return (
    <div className={styles.cartItem}>
      <img src={item.img} alt={item.name} />
      <div className={styles.dataContainer}>
        <div className={styles.left}>
          <p>{item.name}</p>
          <div className={styles.buttons}>
            <button onClick={() => editItemToCart(item._id, "add", amount)}>
            <i className="fa-solid fa-plus"></i>
            </button>
            <button onClick={() => editItemToCart(item._id, "del", amount)}>
            <i className="fa-solid fa-minus"></i>
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};
