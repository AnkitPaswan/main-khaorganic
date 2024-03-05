import React from 'react'
import Header from '../components/Header'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import './SingleProduct.css'


const SingleProduct = () => {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    }

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1
            return prevState - 1;
        });
    }

    return (
        <>
            <Header />
            <Announcement />

            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                        <div className="left">
                            <img src={"https://i.imgur.com/gqZoppx.png"} alt="" />
                        </div>
                        <div className="right">
                            <span className="name">Lokwan Wheat Atta</span>
                            <span className="qty">QTY: 500 g</span>
                            <span className="price">&#8377; 1200</span>
                            <span className="desc">Lokwan wheat Atta is a nutritious, healthy, and versatile food that is a good choice for people of all ages and dietary needs. it is a great way to start your day or enjoy as a healthy snack.</span>

                            <div className="cart-buttons">
                                <div className="quantity-buttons">
                                    <span onClick={decrement}>-</span>
                                    <span>{quantity}</span>
                                    <span onClick={increment}>+</span>
                                </div>
                                <button className="add-to-cart-button" onClick={() => {
                                    // handleAddToCart(data.data[0], quantity);
                                    setQuantity(1);
                                }}>
                                    {/* <FaCartPlus size={20} /> */}
                                    Add to cart
                                </button>
                            </div>

                            <span className="divider" />
                            <div className="info-item">

                                {/* <span className="text-bold">
                                    Share:
                                    <span className="socail-icons">
                                        <FaLinkedinIn size={16} />
                                        <FaFacebookF size={16} />
                                        <FaPinterest size={16} />
                                        <FaInstagram size={16} />
                                        <FaTwitter size={16} />
                                    </span>
                                </span> */}
                            </div>

                        </div>
                    </div>
                    {/* <RelatedProducts productId={id} categoryId={product.categories.data[0].id} /> */}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SingleProduct
