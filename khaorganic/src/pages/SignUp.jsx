import React from 'react'
import './SignUp.css'
import Register from '../assests/signup.svg'
import Profile from '../assests/profile.svg'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="main-signup-container">
                <div className="signup-img">
                    <img src={Register} alt="" />
                </div>
                <div className="signup-container">
                    <form action="">
                        <img className="avatar" src={Profile} alt="" />
                        <h2>Create Account</h2>
                        <div className="input-div one focus ">
                            <div className="i">
                                <PersonIcon />
                            </div>
                            <div>
                                <h5>Username</h5>
                                <input
                                    type="name" className="input" placeholder='ankitpaswan' />
                            </div>
                        </div>
                        <div className="input-div one focus ">
                            <div className="i">
                                <EmailIcon />
                            </div>
                            <div>
                                <h5>Email</h5>
                                <input
                                    type="email" className="input" placeholder='ankitpaswan@gmail.com' />
                            </div>
                        </div>
                        <div className="input-div two focus">
                            <div className="i">
                                <LockIcon />
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input
                                    type="password" className="input" placeholder='******' />
                            </div>
                        </div>
                        <span onClick={() => navigate("/Login")}>Already have an account? SignIn</span>
                        {/* <b className="error">{ErrMsg}</b> */}
                        <input type="submit" className="btn" value="SignUp" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp
