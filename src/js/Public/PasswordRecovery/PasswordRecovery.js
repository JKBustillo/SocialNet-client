import React from 'react';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

function PasswordRecovery() {
    return (
        <div className="recover">
            <Link className="logo-link" to="/"><img className="logo" src={logo} alt="logo" /></Link>
            <h3>Recupera tu contraseña</h3>
            <input type="email" placeholder="Correo electrónico"></input>
            <Link className="signup-home" to="/">Recuperar</Link>
            <div className="links">
                <Link to="/login">Inicia sesión en SocialNet</Link> - <Link to="signup">Regístrate en SocialNet</Link>
            </div>
        </div>
    )
}

export default PasswordRecovery;