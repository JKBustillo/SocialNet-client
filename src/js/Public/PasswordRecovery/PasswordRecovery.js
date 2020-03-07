import React, { useState } from 'react';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

function PasswordRecovery() {
    const [email, setEmail] = useState("");

    return (
        <form className="recover page">
            <Link className="logo-link" to="/"><img className="logo" src={logo} alt="logo" /></Link>
            <h3>Recupera tu contraseña</h3>
            
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Correo electrónico">
            </input>

            <Link className="signup-home" to="/">Recuperar</Link>

            <div className="links">
                <Link to="/login">Inicia sesión en SocialNet</Link> - <Link to="signup">Regístrate en SocialNet</Link>
            </div>
        </form>
    )
}

export default PasswordRecovery;