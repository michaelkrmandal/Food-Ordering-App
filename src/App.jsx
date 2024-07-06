import React from 'react';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import RestaurantListing from './Components/RestaurantListing.jsx';
import Howworks from './Components/Howworks.jsx';
import MenuFeature from './Components/MenuFeature.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Footer from './Components/Footer.jsx';

function App() {
 
  return (
    <div>
     <Header />
     <Hero />
     <RestaurantListing />
     <Howworks />
     <MenuFeature />
     <Testimonials />
     <Footer />
    </div>
  )
}

export default App;
