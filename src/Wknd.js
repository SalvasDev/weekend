import React from 'react'
import About from './components/About';
import Banner from './components/Banner';
import Header from './components/Header';
import Servicios from './components/Servicios';
import { MenuContextProvider } from './context/MenuContext';

function Wknd() {
  return (
    <MenuContextProvider>
    <div className="container">  
      <Header />
      <Servicios />
      <Banner />
      <About />
    </div>
    </MenuContextProvider>
  );
}

export default Wknd;
