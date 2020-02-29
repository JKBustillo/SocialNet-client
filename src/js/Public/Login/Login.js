import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

function Login() {
    return (
        <div className="login">
            <Link className="logo-link" to="/"><img className="logo" src={logo} alt="logo" /></Link>
            <h3>Inicia sesión en SocialNet</h3>
            <input type="email" placeholder="Correo electrónico"></input>
            <input type="password" placeholder="Contraseña"></input>
            <Link className="signup-home" to="/">Inicia sesión</Link>
            <div className="links">
                <Link to="/forgotpassword">¿Olvidaste tu contraseña?</Link> - <Link to="signup">Regístrate en SocialNet</Link>
            </div>
        </div>
    )
}

export default Login;