import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [click, setClick] = useState(false);
    const server_url = 'http://localhost:3001';

    useEffect(() => {
        (async () => {
           if (password !== "" && email !== ""){
                const data = {
                    email: email,
                    pass: password,
                }
                console.dir(data);
                try {
                    const response = await axios.post(`${server_url}/auth/login`, data);
                    console.dir(response);
                    alert("Sesión exitoso 👌");
                } catch (error) {
                    console.error(error);
                }
           }
        })()
   // eslint-disable-next-line 
   }, [click]);

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

            <button type="button" className="signup-home" onClick={e => setClick(!click)}>Inicia sesión</button>

            <div className="links">
                <Link to="/recoverpass">¿Olvidaste tu contraseña?</Link> - <Link to="signup">Regístrate en SocialNet</Link>
            </div>
        </form>
    )
}

export default Login;