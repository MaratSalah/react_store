/* eslint-disable react/prop-types */

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import MainNav from './bin/MainNav.js';
import ShowCase from './bin/ShowCase';
import ClientsCart from './bin/ClientsCart';
import ClientProducts from './bin/ClientProducts';

const App = () => {
  const [products, setProducts] = useState([
    {count: 0, img: '1.jpg', cost: 300000,},
    {count: 0, img: '2.jpg', cost: 200000,},
    {count: 0, img: '3.jpg', cost: 230000,},
    {count: 0, img: '4.jpg', cost: 390000,},
    {count: 0, img: '1.jpg', cost: 300000,},
    {count: 0, img: '2.jpg', cost: 200000,},
    {count: 0, img: '3.jpg', cost: 230000,},
    {count: 0, img: '4.jpg', cost: 390000,},
    {count: 0, img: '1.jpg', cost: 300000,},
    {count: 0, img: '2.jpg', cost: 200000,},
  ]);

  const [showCaseVision, setShowCaseVision] = useState('false');
  
  return (
    <>
      <MainNav showCaseVision={showCaseVision} setShowCaseVision={setShowCaseVision}></MainNav>
      <ShowCase products={products} setProducts={setProducts}></ShowCase>
      <ClientsCart products={products} showCaseVision={showCaseVision} setShowCaseVision={setShowCaseVision}>
        <ClientProducts products={products} setProducts={setProducts}></ClientProducts>
      </ClientsCart>
    </>
    );
}

export default App;
