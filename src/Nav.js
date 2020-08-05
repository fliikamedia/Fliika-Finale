import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.remoteEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`} >
            <img
                className="nav__logo"
                src="https://i.postimg.cc/pLsZzHZW/FLiiKA.png"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://i.postimg.cc/cJ5FySg9/unnamed-1.png"
                alt="Netflix Avatar"
            />

        </div>
    );
}

export default Nav;
