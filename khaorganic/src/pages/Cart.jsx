
import React from 'react'
import './Cart.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
// import { useNavigate } from "react-router-dom";
import { popularProducts } from '../utils/data';
import Header from '../components/Header'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

const Cart = () => {
    // const navigate = useNavigate();

    return (

        <>
            <Header />
            <Announcement />
            <div className="wrapper">
                <h1>YOUR BAG</h1>
                <hr />
                <div className="top">
                    {/* <button onClick={() => navigate("/")}>CONTINUE SHOPPING</button> */}

                    {/* <button>CHECKOUT NOW</button> */}
                </div>
                <div className="bottom">
                    <div className="info">
                        {/* {!popularProducts.length && <div className="empty-cart">
                            <img src="https://rackstore.be/assets/images/empty-cart.png" alt="sorry" />
                            <p> Your cart is empty.</p>
                            <span>Add something to make me happy :)</span>
                            </div>} */}
                        {popularProducts.slice(2).map((product) => (
                            <div className="product" key={product.id} product={product}>
                                <div className="product-detail">
                                    <img src={product.img} alt="" />
                                    <div className="details">
                                        <div className="product-name">
                                            <b>Product:</b> {product.title}
                                        </div>
                                        <div className="product-id">
                                            <b>ID:</b> {product.id}
                                        </div>
                                        <div className="product-color">
                                            <b>QTY:</b> {product.qty}
                                        </div>
                                    </div>
                                </div>

                                <div className="PriceDetail">
                                    <button ><DeleteIcon /></button>
                                    <div className="ProductAmountContainer">
                                        <div className="quantity-btn">
                                            <span ><RemoveIcon /></span>
                                            <span>2</span>
                                            <span ><AddIcon /></span>
                                        </div>
                                    </div>
                                    <div className="ProductPrice">&#8377; {product.price * 2}.00</div>

                                </div>
                                {/* <button ><DeleteIcon /></button> */}

                            </div>))}
                        <hr />
                    </div>

                    <div className="summary">
                        <div className="SummaryTitle">
                            ORDER SUMMARY
                        </div>
                        <div className="SummaryItem">
                            <div className="SummaryItemText">SubTotal</div>
                            <div className="SummaryItemPrice">&#8377; 500.00</div>
                        </div>
                        <div className="SummaryItem">
                            <div className="SummaryItemText">Estimated Shipping</div>
                            <div className="SummaryItemPrice">&#8377; 30.90</div>
                        </div>
                        <div className="SummaryItem">
                            <div className="SummaryItemText">Shipping Discount</div>
                            <div className="SummaryItemPrice">&#8377; -30.90</div>
                        </div>
                        <hr />
                        <div className="SummaryItem">
                            <div className="SummaryItemText" type="total"><span> Total</span></div>
                            <div className="SummaryItemPrice"> <span>&#8377; 1200.00</span></div>

                        </div>
                        <button>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Cart
