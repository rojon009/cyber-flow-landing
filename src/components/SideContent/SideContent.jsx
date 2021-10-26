import React from 'react';

const SideContent = () => {
  return (
    <div className="col-12 col-md-3 bg-warning pt-5 pb-5 ps-4">
      <h5 className="text-white pb-3">Website Add-ons</h5>
      <p>Check out our easy to integrate Website Add-ons!</p>
      <ul style={{listStyleType: 'square'}}>
        <li>Smart Survey</li>
        <li>Smart Multi Poll</li>
        <li>Smart Poll</li>
        <li>Smart Guest Book</li>
        <li>Smart Quote</li>
      </ul>
    </div>
  );
};

export default SideContent;