import React from 'react'
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Header from '../components/Header';
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2]
    const [filters] = useState({});
  return (
    <div className="list-container">
            <Header />
            <Announcement />
            {/* <h1>{cat}</h1> */}
            <Products cat={cat} filters={filters} headingText={cat}/>
            <Newsletter />
            <Footer />
        </div>
  )
}

export default ProductList