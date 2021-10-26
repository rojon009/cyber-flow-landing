import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from './../Banner/Banner';

const Header = () => {
  return (
    <header className="bg-primary bg-gradient py-4">
      <div className="row">
        <div className="col-6">
          <Navbar />
          <Banner />
        </div>
        <div className="col-6">
        </div>
      </div>
    </header>
  );
};

export default Header;