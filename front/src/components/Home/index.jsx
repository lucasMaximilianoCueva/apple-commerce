import Cart from "../Cart";
import Products from "../Products";
import React from "react";
import SearchInput from "../SearchInput";
import styles from './styles.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <SearchInput />
      <Cart />
      <Products />
    </div>
  );
};

export default Home;
