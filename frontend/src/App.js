import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Login from './pages/Login';
// import SignUp from './pages/SignUp';
import SignUp from './pages/SignUp';

import './App.css';

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/services' component = {<Services />} />
        <Route path='/products' component = {<Products />} />
        <Route path='/signup' component = {<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
