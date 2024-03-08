import React from 'react'
import './Product.css'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { motion } from 'framer-motion';


const Product = ({ item }) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <motion.div className="product-card"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            onClick={() => navigate(`/singleproduct/${item.id}`)} >

            <div className="thumbnail">
                <img src={item.img} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{item.title}</span>
                <span className="qty">QTY: {item.qty}</span>
                <span className="price">&#8377; {item.price}</span>
            </div>
            <div className="prod-btn">
                <div className="view-detail">
                    <VisibilityIcon style={{ fontSize: "1.2em", color: "#539F22" }} />
                    View detail
                </div>
                <div className="shop-btn">
                    < ShoppingBagIcon style={{ fontSize: "1.2em", color: "#539F22" }} />
                    Add to cart
                </div>
            </div>
        </motion.div>

    )
}

export default Product
