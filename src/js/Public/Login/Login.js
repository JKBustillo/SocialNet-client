import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import axios from 'axios';
import Error from '../Error/Error';

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(false);
    const server_url = 'http://localhost:3001';

    const { email, password } = loginInfo;

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.post(`${server_url}/auth/login`, loginInfo);
                console.dir(response);
                alert("Sesión exitosa 👌");
            } catch (error) {
                console.error(error);
            }
        })()
    // eslint-disable-next-line 
    }, []);

    const handleChange = e => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        if (email.trim() === "" || password.trim() === ""){
            setError(true);
            return;
        }
        setError(false);

        console.log(loginInfo);
    };

    return (
        <form className="login page" onSubmit={handleSubmit}>
            <Link className="logo-link" to="/"><img className="logo" src={logo} alt="logo" /></Link>
            <h3>Inicia sesión en SocialNet</h3>
            
            { error ? <Error message="Todos los campos son obligatorios"/> : null}

            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Correo electrónico">
            </input>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Contraseña">
            </input>

            <div className="check-login">
                <input type="checkbox"></input>
                <h4>Recordar contraseña</h4>
            </div>

            <button type="submit" className="signup-home">Inicia sesión</button>

            <div className="links">
                <Link to="/recoverpass">¿Olvidaste tu contraseña?</Link> - <Link to="signup">Regístrate en SocialNet</Link>
            </div>
        </form>
    )
}

export default Login;