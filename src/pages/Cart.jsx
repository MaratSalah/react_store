/* eslint-disable react/prop-types */

import React from "react";
import CartShowCase from "../bin/CartShowCase";
import MainNav from '../bin/MainNav';

const Cart = (props) => {
  const { products, setProducts } = props;

  return (
    <>
      <MainNav></MainNav>
      <CartShowCase products={products} setProducts={setProducts}></CartShowCase>
    </>
  );
};

export default Cart;
