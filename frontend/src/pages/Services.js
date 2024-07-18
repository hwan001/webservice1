import React from 'react'
import '../App.css';

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

export default function Services() {
    const homeMenuItems = [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: "Products", path: "/products" },
      ];

    return (
        <>
            <Navbar menuItems={homeMenuItems} />
            <h1 className='services'>SERVICES PAGE</h1>
            <Footer />
        </>
    );
}