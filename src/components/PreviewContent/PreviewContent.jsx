import React from 'react';
import Star from './../../images/star.png'

const PreviewContent = () => {
  return (
    <div className="col-12 col-md-9 pt-5 ps-4 pe-3">
      <h3 className="text-primary pb-3">Features of this CSS Personal/General Template</h3>
      <ul className="pb-3" style={{listStyleImage: `url(${Star})`, listStylePosition: 'inside'}}>
        <li>Attractive general or personal web site design using bright colors</li>
        <li>Optimized, fast-loading and W3C certified valid CSS & HTML code</li>
        <li>Easy-to-edit Text Links with easy-to-use Drop-down Menus</li>
        <li>Tableless layout CSS design. All 11 linked HTML pages included </li>
        <li>Cross Browser Compatible - <span className="text-warning">tested for IE5+, Netscape 6+, Opera 7+, Firefox 1.0+</span></li>
        <li>Designed to stretch and fit all resolutions (800 x 600 and higher)
        </li>
      </ul>

      <p className="pb-3"><strong>Buy Now </strong> for Only <strong>$59.95</strong>! <a href="/">Add to Cart</a></p>
      <p>Smart Webby offers professional web templates at affordable prices. Choose from a variety of high quality website designs to find the perfect template for your line of business. <a href="/">More Templates from SmartWebby.com</a></p>
    </div>
  );
};

export default PreviewContent;