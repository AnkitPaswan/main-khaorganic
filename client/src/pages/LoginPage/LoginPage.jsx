import React from 'react'
import './LoginPage.css'
import { useNavigate } from "react-router-dom";
import SignIn from '../../assests/login.svg'
import Profile from '../../assests/profile.svg'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import {useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
    
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  console.log( error);
  
  const handleSubmit = (e) => {
  
   if (!username || !password){
    username === '' ? alert('Please enter username') : password === '' ? alert('Please enter password') :
     alert('Please fill all fields')
    return;
   } 
   else if (username === 'admin') {
    alert('You are logged in as admin');
   }
   let userData = { username: username, password: password };
   
   login(dispatch, userData);
   console.log(userData);

   e.preventDefault();
   navigate('/');
    // login(dispatch, { username, password }
  };
    return (
        <>
            <div className="main-login-container">
                <div className="img">
                    <img src={SignIn} alt="" />
                </div>
                <div className="login-container">
                    <form action="" >
                        <img className="avatar" src={Profile} alt="" />
                        <h2>Welcome</h2>
                        <div className="input-div one focus ">
                            <div className="i">
                                <PersonIcon />
                            </div>
                            <div>
                                <h5>Username</h5>
                                <input
                                    type="name" className="input" placeholder='ankitpaswan' required
                                    onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>
                        <div className="input-div two focus">
                            <div className="i">
                                <LockIcon />
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input
                                    type="password" className="input" placeholder='*****' onChange={(e) => setPassword(e.target.value)} required/>
                            </div>
                        </div>
                        <span onClick={() => navigate("/SignUp")}> Register Now?</span>
                        <button type="submit" className="btn" onClick={handleSubmit} disabled={isFetching}>LogIn</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage
