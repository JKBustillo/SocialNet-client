import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

function Register() {
    return (
        <div className="register page">
            <Link className="logo-link" to="/" ><img className="logo" src={logo} alt="logo" /></Link>

            <h2>Crea una cuenta</h2>


            <div className="inputs">
                <div className="inputs-item">
                    <input type="text" placeholder="Nombre"></input>
                    <input type="text" placeholder="Apellido"></input>
                </div>
                <div className="inputs-item">
                    <input type="email" placeholder="Correo electrónico"></input>
                    <input type="number" placeholder="Teléfono"></input>
                </div>
                <div className="inputs-item">
                    <input type="password" placeholder="Contraseña"></input>
                    <input type="password" placeholder="Confirmar contraseña"></input>
                </div>
            </div>


            <h3>Fecha de nacimiento: </h3>
            <input type="date" placeholder="Fecha de nacimiento"></input>

            <Link className="signup-home" to="">Regístrate</Link>

            <div className="links">
                <Link to="/recoverpass">¿Olvidaste tu contraseña?</Link> - <Link to="login">Inicia sesión</Link>
            </div>
        </div>
    )
}

export default Register;