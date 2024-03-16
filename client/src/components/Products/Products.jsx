import React, { useState, useEffect } from 'react'
import Product from '../Product/Product'
import './Products.css'
import { motion } from 'framer-motion';

import axios from "axios";

const Products = ({ cat,filters, headingText, innerpage }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (error) {
                // res.error(error)

            }
        };
        getProducts()
    }, [cat]);

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)))
        )
    }, [products, cat, filters]);

    return (
        <div className="products-container" >
            {!innerpage && <motion.div className="sec-heading"
                initial={{ opacity: 0, x: -40 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: false }}
            >{headingText}</motion.div>}
            <div className="products">
                {(products.length !== 0) ? (cat ? filteredProducts.map((item) => (
                    <Product item={item} key={item.id} />
                )) : products.slice(0, 8).map((item) => (
                    <Product item={item} key={item.id} />
                ))) : <h1>Loading...</h1>}
            </div>
        </div>
    )
}

export default Products
