import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
// import ABlog from "./Components/Blog/a Blog/ABlog";
import Gallery from "./pages/Gallery";

import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import FollowBar from './Components/Shared/actionBar/FollowBar'


import ScrollToTop from "./Components/Shared/Tools/ScrollToTop";

// Styles
import "./App.module.css";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <Router>
        <Navbar />

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

          <Route path="/products" element={<Products />} />

          <Route path="/articles" element={<Articles />} />

          {/* <Route path="/articles/:slug" element={<ABlog />} /> */}

          <Route path="/contact" element={<Contact />} />

          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <FollowBar/>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
