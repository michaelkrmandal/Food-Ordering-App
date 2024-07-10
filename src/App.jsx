import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import RestaurantListing from './Components/RestaurantListing.jsx';
import MenuFeature from './Components/MenuFeature.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Footer from './Components/Footer.jsx';
import {CartProvider} from './Components/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/menu" element={<MenuFeature />} />
              <Route path="/about" element={<Testimonials />} />
              <Route path="/restaurants" element={<RestaurantListing />} />
            </Routes>
            <Footer />
      </Router>
    </CartProvider>
  )
}

export default App;
