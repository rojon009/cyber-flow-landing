import React from 'react';
import SampleImage from './../../images/sample-image.jpg'
const Gallery = () => {
  return (
    <div className="bg-warning row g-1 pt-4">
      <img className="img-fluid col-4" src={SampleImage} alt="" />
      <img className="img-fluid col-4" src={SampleImage} alt="" />
      <img className="img-fluid col-4" src={SampleImage} alt="" />
    </div>
  );
};

export default Gallery;