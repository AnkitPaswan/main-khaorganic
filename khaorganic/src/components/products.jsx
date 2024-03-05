import React from 'react'
import { popularProducts } from '../utils/data'
import Product from './Product'
import './products.css'
import { motion } from 'framer-motion';

const products = ({ headingText, innerpage }) => {
    return (
        <div className="products-container">
            {!innerpage && <motion.div className="sec-heading"
                initial={{ opacity: 0, x: -40 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: false }}
            >{headingText}</motion.div>}
            <div className="products">
                {popularProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default products
