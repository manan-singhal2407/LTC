import React from 'react';
import './NavbarElements.css';


const Navbar = () => {
  return (
    <>
      <div className="header">
        <img className="logo" src="https://www.iitrpr.ac.in/sites/default/files/logo_0_2.png" alt="" />
        <div className="Name">
            <div className="colname">Indian Institute of Technology Ropar</div>
            <div className="hiname">भारतीय प्रौद्योगिकी संस्थान रोपड़</div>
        </div>
        <div className="ltc">
            Leave/Travel Concession
        </div>
        </div>
    </>
  );
};
  
export default Navbar;