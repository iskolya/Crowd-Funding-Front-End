import React, { useState } from "react";
import "./LoginForm.css";
// import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="form-wrapper">
            <h2 className="title title-1">Добрый День!</h2>
            <h2 className="title title-2">Добро Пожаловать</h2>
            <div className="form">
                <input type="text" className="input" placeholder="Введите вашу эл. почту" />
                <div className="password-field">
                    <input type={showPassword ? 'text' : 'password'} className="input" placeholder="*********" />
                    <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} role="img" aria-label="eye" className="eye-icon">👁️</span>
                </div>
                <div className="flex">
                    <div>
                        <input type="checkbox" id="rembember-me" />
                        <label htmlFor="forgotPassword" className="remember-me">Запомнить Меня</label>
                    </div>
                    <div className="forgot">
                        <a href="" className="forgot-password">
                            <p>Забыли пароль?</p>
                        </a>
                    </div>
                </div>
                <button className="submit-in">Войти</button>
                <div className="divider">
                    <hr />
                    <p>войти через</p>
                    <hr />
                </div>
                <button className="submit-google">
                    <span>Google</span>
                    <img src="./googleicon.png" alt="google-icon" className="google-icon" />
                </button>
                <div className="registration">
                    <a href="" className="registration-1">
                        <p>Нет аккаунта?</p>
                    </a>
                    <a href="" className="registration-2">
                        <p>Зарегистрироваться</p>
                    </a>
                </div>
                <img src="./vkontakte.png" alt=""width={15}height={15} />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default LoginForm;
