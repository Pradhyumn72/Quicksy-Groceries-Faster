import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Topmenu from './Components/TopMenu';
import Slider from './Components/Slider';
import Bottommenu from './Components/Bottommenu';
const Layout = () => {
  return (
    <div>
      <Header/>
      <Topmenu/>
      <Slider/>
      <Bottommenu/>
      <Footer/>

    </div>
  );
}

export default Layout;
