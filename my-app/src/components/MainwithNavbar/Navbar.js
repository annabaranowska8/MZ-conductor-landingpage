import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar__ul">
                <li className="navbar__li"><a href="#">Biografia</a></li>
                <li className="navbar__li"><a href="#">Koncerty</a></li>
                <li className="navbar__li"><a href="#">Galeria</a></li>
                <li className="navbar__li"><a href="#">Kontakt</a></li>
            </ul>
        </div>
    )
}

export default Navbar;