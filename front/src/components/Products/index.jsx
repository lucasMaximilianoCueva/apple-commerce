import React, { useContext } from "react";

import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";

const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { addItemToCart, products, newProducts } = useContext(CartContext);

  return (
    <>
      {newProducts.length === 0 ? (
        <div className="mb-5">
          <h3><i className="fa-solid fa-circle-exclamation"></i> No results for your search</h3>
        </div>
      ) : (
        <div className={styles.productsContainer}>
          {products &&
            newProducts.map((product, i) => (
              <div key={i} className={styles.product}>
                <img src={product.img} alt={product.name} />
                <div>
                  <p>
                    {product.name} - ${product.price}
                  </p>
                </div>
                {!product.inCart ? (
                  <button onClick={() => addItemToCart(product)}>
                    Add to Cart
                  </button>
                ) : (
                  <button className="btn btn-secondary">In the Cart</button>
                )}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Products;
