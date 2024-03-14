
import './Search.css';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Search = ({ setShowSearch }) => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [query , setQuery] = useState("");

    useEffect(() =>{
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    console.log(products);

    let searchResult = products.filter((item) => (item.title.toLowerCase().includes(query)) || (item.title.toUpperCase().includes(query)));
    
 console.log(query);

    return (
        <div className="search-modal">
            <div className="form-field">
                <input type="text"
                    autoFocus
                    placeholder="Search here..."
                    onChange={(e) => setQuery(e.target.value)}
                    value={query} 
                />
                <div className="cler-btn">
                    <CloseIcon onClick={() => setShowSearch(false)} />
                </div>
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    {
                        searchResult.length === 0 ? (
                            <h3>No result found "{query}"</h3>
                        ):
                       ( (query) && searchResult.map((item) => (
                           <div className="search-result-item" onClick={() => {
                            navigate("/product/" + item._id);
                            setShowSearch(false);
                        }}>
                                <div className="img-container">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="prod-details">
                                    <span className="name">{item.title}</span>
                                    <span className="desc">{item.desc}</span>
                                </div>
                            </div>
               )))
                    }
            </div>
        </div>
        </div>
    );
};


export default Search;
