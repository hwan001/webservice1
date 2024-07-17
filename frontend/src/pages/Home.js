import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Common.css";

import Header from "../components/Header.js";
//import Card from '../components/Card.js';
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroSection from "../components/HeroSection.js";

function HomeHeader() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    console.log("Navigating to login");
    navigate("/login");
  };

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <>
      <Header title="H001 SYSTEM">
        <button onClick={handleLoginRedirect}>Login</button>
        <button onClick={handleSignUpRedirect}>Sign Up</button>
      </Header>
    </>
  );
}

function HomeBody() {
  //let res = useSummary();

  return (
    <>
      <div className="common-body"></div>
    </>
  );
}

function Home() {
  const homeMenuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Products", path: "/products" },
  ];

  return (
    <>
      <Navbar menuItems={homeMenuItems} />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
