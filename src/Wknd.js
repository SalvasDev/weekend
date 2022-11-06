import React from 'react'
import About from './components/About';
import Banner from './components/Banner';
import Header from './components/Header';
import Servicios from './components/Servicios';

function Wknd() {
  return (
    <div className="container">  
      <Header />
      <Servicios />
      <Banner />
      <About />
    </div>
  );
}

export default Wknd;
