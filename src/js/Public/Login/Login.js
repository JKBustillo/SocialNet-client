import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <form className="login page">
            <Link className="logo-link" to="/"><img className="logo" src={logo} alt="logo" /></Link>
            <h3>Inicia sesión en SocialNet</h3>
            
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Correo electrónico">
            </input>
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Contraseña">
            </input>

            <div className="check-login">
                <input type="checkbox"></input>
                <h4>Recordar contraseña</h4>
            </div>

            <Link className="signup-home" to="/">Inicia sesión</Link>

            <div className="links">
                <Link to="/recoverpass">¿Olvidaste tu contraseña?</Link> - <Link to="signup">Regístrate en SocialNet</Link>
            </div>
        </form>
    )
}

export default Login;