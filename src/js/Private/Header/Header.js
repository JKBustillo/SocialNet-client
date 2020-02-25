import React from 'react';

function Header() {
    return (
        <div>
            <header>
                <div className="container">
                    <a href="/" className="logo">SocialNetwork</a>
                    <nav>
                        <ul>
                        <li><a href="/">Chat</a></li>
                        <li><a href="/">Perfil</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;