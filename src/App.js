import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home.components';
import Promotion from './pages/promotions/promotions.components';
import ProductPage from './pages/products/products.components';
import './App.css';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/products' element={<ProductPage/>} />
    <Route path='/promotion' element={<Promotion/>} />
   </Routes>
   </>
  );
}

export default App;
