import React from 'react';
import RegistrForm from '../Components/RegisterForm/RegistrForm';
import Navbar from '../Components/Navbar/Navbar';
import './RegistrPage.css'

const RegistrPage = () => {
    return (
        <div className="body">
            <Navbar/>
            <div className="register-page">
            <img src="./rain-bow.png" alt="rainbow" className="img-1" />
               <div className="img"> <img src="./Hand-register.png" alt="" width={'400px'} height={'531px'}/></div>
               <div className="register1"><RegistrForm/></div>
            </div>   
        </div>
    );
};

export default RegistrPage;