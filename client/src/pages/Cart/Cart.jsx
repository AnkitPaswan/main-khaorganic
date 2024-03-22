
import React from 'react'
import './Cart.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../../components/Header/Header'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import { useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from 'react-redux';

const Cart = () => {

    const cart = useSelector(state => state.cart);
  console.log(cart);
  const dispatch = useDispatch()

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
                    {!cart.products.length && <div className="empty-cart">
              <img src="https://rackstore.be/assets/images/empty-cart.png" alt="sorry" />
              <p> Your cart is empty.</p>
              <span>Add something to make me happy :)</span>
            </div>}
                        {cart.products.map((product) => (
                            <div className="product" key={product._id} product={product}>
                                <div className="product-detail">
                                    <img src={product.img} alt="" />
                                    <div className="details">
                                        <div className="product-name">
                                            <b>Product:</b> {product.title}
                                        </div>
                                        <div className="product-id">
                                            <b>ID:</b> {product._id}
                                        </div>
                                        <div className="product-color">
                                            <b>QTY:</b> {product.qty}
                                        </div>
                                    </div>
                                </div>

                                <div className="PriceDetail">
                                    <button onClick={() => dispatch(removeFromCart(product))} ><DeleteIcon /></button>
                                    <div className="ProductAmountContainer">
                                        <div className="quantity-btn">
                                            <span onClick={() => dispatch(decrementQuantity(product))}><RemoveIcon /></span>
                                            <span>{product.quantity}</span>
                                            <span onClick={() => dispatch(incrementQuantity(product))}><AddIcon /></span>
                                        </div>
                                    </div>
                                    <div className="ProductPrice">&#8377; {product.price * product.quantity}.00</div>
                                </div>

                            </div>))}
                        <hr />
                    </div>

                    <div className="summary">
                        <div className="SummaryTitle">
                            ORDER SUMMARY
                        </div>
                        <div className="SummaryItem">
                            <div className="SummaryItemText">SubTotal</div>
                            <div className="SummaryItemPrice">&#8377; {cart.total}.00</div>
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
                            <div className="SummaryItemPrice"> <span>&#8377; {cart.total}.00</span></div>

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
