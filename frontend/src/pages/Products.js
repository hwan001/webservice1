import React from 'react';
import '../App.css';

import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";

export default function Products() {
    const homeMenuItems = [
        { label: "Home", path: "/" },
        { label: "Services", path: "/services" },
        { label: "Products", path: "/products" },
        { label: "Services", path: "/services" },
        { label: "Products", path: "/products" },
        { label: "Services", path: "/services" },
        { label: "Products", path: "/products" },
        
      ];

    return (
        <>
            <Navbar menuItems={homeMenuItems} />
            <h1 className='products'>PRODUCTS</h1>
        </>
    );
    
}