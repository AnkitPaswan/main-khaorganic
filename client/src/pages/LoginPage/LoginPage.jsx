import React from 'react'
import './LoginPage.css'
import { useNavigate } from "react-router-dom";
import SignIn from '../../assests/login.svg'
import Profile from '../../assests/profile.svg'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';


const LoginPage = () => {
    const navigate = useNavigate();

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
                                <h5>Email</h5>
                                <input
                                    type="email" className="input" placeholder='example@gmail.com' />
                            </div>
                        </div>
                        <div className="input-div two focus">
                            <div className="i">
                                <LockIcon />
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input
                                    type="password" className="input" placeholder='*****' />
                            </div>
                        </div>
                        <span onClick={() => navigate("/SignUp")}> Register Now?</span>
                        {/* <b className="error">{ErrMsg}</b> */}
                        <button type="submit" className="btn">LogIn</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage
