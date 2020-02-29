import React, { useState, useEffect } from 'react';
import Private from './Private/Private';
import Public from './Public/Public';

function Main() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const uid = sessionStorage.getItem("user");
        uid !== null && setIsAuth(true);
    }, [isAuth]);

    const setAuthentication = val => {
        if (!val) {
            sessionStorage.clear();
        }
        setIsAuth(val);
    };

    return (
        <div>
            <main>
                {isAuth ? (
                    <Private setAuthentication={setAuthentication} />
                ) : (
                    <Public setAuthentication={setAuthentication} />
                )}
            </main>
        </div>
    )
}

export default Main;