import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home.components';
import Promotion from './pages/promotions/promotions.components';
import ProductPage from './pages/products/products.components';
import HomeDetails from './pages/home-details/home-details.components';
import SellingDetails from './pages/selling-details/selling-details.components';
import './App.css';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/products' element={<ProductPage/>} />
    <Route path='/promotion' element={<Promotion/>} />
    <Route path="/products/:id" render={(props) => <HomeDetails {...props} category="products" />} element={<HomeDetails/>} />
    <Route path="/top-selling/:id" render={(props) => <SellingDetails {...props} category="topSelling" />} element={<SellingDetails/>} />
   </Routes>
   </>
  );
}

export default App;
