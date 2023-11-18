/* eslint-disable react/prop-types */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './main.scss';
import MainPage from './pages/MainPage';
import Cart from './pages/Cart';

const App = () => {
  const [products, setProducts] = useState([
    { count: 0, img: '1.jpg', cost: 300000, },
    { count: 0, img: '2.jpg', cost: 200000, },
    { count: 0, img: '3.jpg', cost: 230000, },
    { count: 0, img: '4.jpg', cost: 390000, },
    { count: 0, img: '1.jpg', cost: 300000, },
    { count: 0, img: '2.jpg', cost: 200000, },
    { count: 0, img: '3.jpg', cost: 230000, },
    { count: 0, img: '4.jpg', cost: 390000, },
    { count: 0, img: '1.jpg', cost: 300000, },
    { count: 0, img: '2.jpg', cost: 200000, },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='react_store' element={<MainPage setProducts={setProducts} products={products}></MainPage>} />
        <Route path='react_store/cart' element={<Cart setProducts={setProducts} products={products}></Cart>} />
        <Route path='*' element={<span>Error 404</span>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
