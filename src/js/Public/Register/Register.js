import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import axios from 'axios';

function Register() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birth, setBirth] = useState("");
    const [click, setClick] = useState(false);
    const server_url = 'http://localhost:3001';

    useEffect(() => {
         (async () => {
            if (password === confirmPassword && password !== "" && confirmPassword !== ""){
                const data = {
                    name: name,
                    last: lastName,
                    email: email,
                    phone: phoneNumber,
                    birth: birth,
                    pass: password,
                }
                console.dir(data);
                try {
                    const response = await axios.post(`${server_url}/auth/register`, data);
                    console.dir(response);
                    alert("Registro exitoso 👌");
                } catch (error) {
                    console.error(error);
                }
            } else{
                if(password !== ""){
                    alert("Las contraseñas no coinciden 🤧");
                }
            }
        })()
    // eslint-disable-next-line 
    }, [click]);

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

            <button type="button" className="signup-home" 
                onClick={e => setClick(!click)}
            >Regístrate</button>

            <div className="links">
                <Link to="/recoverpass">¿Olvidaste tu contraseña?</Link> - <Link to="login">Inicia sesión</Link>
            </div>
        </form>
    )
}

export default Register;