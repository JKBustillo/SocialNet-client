import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

function Register() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birth, setBirth] = useState(0, 0, 0);

    return (
        <form className="register page">
            <Link className="logo-link" to="/" ><img className="logo" src={logo} alt="logo" /></Link>
            <h2>Crea una cuenta</h2>

            <div className="inputs">
                <div className="inputs-item">
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nombre">
                    </input>
                    <input
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Apellido">
                    </input>
                </div>
                <div className="inputs-item">
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Correo electrónico">
                    </input>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        placeholder="Teléfono">
                    </input>
                </div>
                <div className="inputs-item">
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Contraseña">
                    </input>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        placeholder="Confirmar contraseña">
                    </input>
                </div>
            </div>


            <h3>Fecha de nacimiento: </h3>
            <input
                type="date"
                value={birth}
                onChange={e => setBirth(e.target.value)}
                placeholder="Fecha de nacimiento">    
            </input>

            <Link className="signup-home" to="/">Regístrate</Link>

            <div className="links">
                <Link to="/recoverpass">¿Olvidaste tu contraseña?</Link> - <Link to="login">Inicia sesión</Link>
            </div>
        </form>
    )
}

export default Register;