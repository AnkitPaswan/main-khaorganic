import { useEffect, useRef, useState } from "react";
import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";
import logo from "../assests/khaorganic-logo1.jpg";
import MenuIcon from '@mui/icons-material/Menu';
import Search from "./Search";
const Header = () => {

    const menuRef = useRef();
    const [showSearch, setShowSearch] = useState(false);
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('center-visible');
        e.target.classList.toggle('open');
    }
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
            setIsActive(false);
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <img className="logo" src={logo} alt="" />
                    </ul>
                    <div onClick={dropdown_toggle} className="hamburger-menu">
                        <MenuIcon style={{ fontSize: "40px" }} />
                    </div>
                    <div ref={menuRef} className="center" >
                        <li onClick={() => navigate("/")}>Home</li>
                        <li className="dropdown">

                            <div className="dropdown-btn" onClick={(e) => { setIsActive(!isActive) }}>
                                Products
                                <ArrowDropDownIcon />
                            </div>
                            {isActive && (
                                <div className="dropdown-content">
                                    <div className="dropdown-item">Atta</div>
                                    <div className="dropdown-item">Besan</div>
                                    <div className="dropdown-item">Daliya</div>
                                </div>
                            )}
                        </li>
                        <li>About</li>
                        <li onClick={() => navigate("/contactUs")}>Contact</li>
                    </div>
                    <div className="right">
                        <li> <SearchIcon onClick={() => setShowSearch(true)} /></li>
                        <span className="cart-icon" onClick={() => navigate("/Cart")}>
                            <ShoppingCartOutlinedIcon />
                            <span>5</span>
                        </span>
                        <li className='sign' onClick={() => navigate("/Login")}>Sign in</li>
                    </div>
                </div>
            </header>
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    )
}

export default Header
