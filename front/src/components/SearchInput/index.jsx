import React, { useContext } from "react";

import CartContext from "../../context/CartContext";

// import styles from "./styles.module.scss";

const SearchInput = () => {
  const { products, setNewProducts } = useContext(CartContext);
  const event = (e) => {
    const newProducts = products.filter((prod) =>
      prod.name.toLowerCase().includes(e.toLowerCase())
    );
    setNewProducts(newProducts);
  };

  return (
    <div className="w-50 p-3">
      <form className="mb-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={(e) => {
              event(e.target.value);
            }}
          ></input>
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
