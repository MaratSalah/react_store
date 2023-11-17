/* eslint-disable react/prop-types */

import React from 'react';
import MainNav from '../bin/MainNav';
import ShowCase from '../bin/ShowCase';
// import ClientsCart from '../bin/ClientsCart';
// import ClientProducts from '../bin/ClientProducts';

const MainPage = (props) => {

  const { products, setProducts } = props;

  return (
    <>
      <MainNav></MainNav>
      <ShowCase products={products} setProducts={setProducts}></ShowCase>
    </>
  );
}

export default MainPage;
