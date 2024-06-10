import React from 'react';
import LoginForm from '../Components/LoginForm/LoginForm';
import Navbar from '../Components/Navbar/Navbar';
import "./LoginPage.css"
const LoginPage = () => {
    
    return (
        <div className="login-page">
            <Navbar/>
            <div className="login-page-hero">
                <img src="./rain-bow.png" alt="rainbow" className="img-1" />
                <div className="img-hand"><img src="./Hand.png" alt="Hand"/></div>
                <div className="login"><LoginForm/></div>

            </div>                              
        </div>
        
    );
};

export default LoginPage;