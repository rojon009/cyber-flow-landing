import React from 'react';
import Gallery from '../Gallery/Gallery';
import Navbar from '../Navbar/Navbar';
import Banner from './../Banner/Banner';

const Header = () => {
  return (
    <header className="bg-primary bg-gradient pb-4">
      <div className="row g-0">
        <div className="col-12 col-lg-6">
          <Navbar />
          <Banner />
        </div>
        <div className="col-12 col-lg-6">
          <Gallery />
        </div>
      </div>
    </header>
  );
};

export default Header;