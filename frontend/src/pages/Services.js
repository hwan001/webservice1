import React from 'react'
import '../App.css';

import Navbar from "../components/Navbar.js";

export default function Services() {
    const homeMenuItems = [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: "Products", path: "/products" },
        { label: "Contact", path: "/contact" },
      ];
      
    return (
        <>
            <Navbar menuItems={homeMenuItems} />
            <h1 className='services'>SERVICES</h1>
        </>
    );
}