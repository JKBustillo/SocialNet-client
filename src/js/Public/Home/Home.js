import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import chat from "../../../assets/chat.png";
import people from "../../../assets/people.png";
import search from "../../../assets/search.png";

function Home() {
    return (
        <div className="home page">
            <div className="home-white">
                <img className="logo" src={logo} alt="logo"></img>
                <h2>Ya vi que eres un mariquita, <br/>
                ahora tiene sentido.</h2>

                <h3>Únete a SocialNet hoy.</h3>

                <Link to="/signup" className="signup-home">Regístrate</Link><br />
                <Link to="/login" className="login-home">Inicia sesión</Link>
            </div>
            <div className="home-blue">
                <ul>
                    <li>
                        <img src={search} alt="search-icon" className="icon-home"/>
                        <p>Busca personas que conozcas</p>
                    </li>
                    <li>
                        <img src={people} alt="people-icon" className="icon-home"/>
                        <p>Mira lo que publica la gente</p>
                    </li>
                    <li>
                        <img src={chat} alt="chat icon" className="icon-home"/>
                        <p>Habla con tus amigos</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;