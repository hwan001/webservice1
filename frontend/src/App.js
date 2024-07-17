import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element = {<SignUp />} />
        <Route path='/services' element = {<Services />} />
        <Route path='/products' element = {<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
