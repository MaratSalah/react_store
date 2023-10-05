import './bootstrap/bootstrap.min.css';
import React, { useState } from 'react';
import MainNav from './bin/MainNav.js';
import ShowCase from './bin/ShowCase';
import ClientsCart from './bin/ClientsCart';

const App = (props) => {
  const [products, setProducts] = useState([
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
  ]);

  const [showCaseVision, setShowCaseVision] = useState('false');
  
  return (
    <>
      <MainNav showCaseVision={showCaseVision} setShowCaseVision={setShowCaseVision}></MainNav>
      <ShowCase products={products}></ShowCase>
      <ClientsCart showCaseVision={showCaseVision} setShowCaseVision={setShowCaseVision}></ClientsCart>
    </>
    );
}

export default App;
