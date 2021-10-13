import React from "react";
import { NavHashLink } from 'react-router-hash-link';


const NavbarBiography = () => {

    return (
        <nav className="navbar--sm">
            <ul className="navbar__ul--sm">
            <li className="navbar__li--sm"><NavHashLink
                to="/"
                activeClassName="selected"
                smooth
                >Strona główna</NavHashLink></li>
                <li className="navbar__li--sm"><NavHashLink
                to="/concerts"
                activeClassName="selected"
                smooth
                >Koncerty</NavHashLink></li> 
                <li className="navbar__li--sm"><NavHashLink
                to="/biography"
                activeClassName="selected"
                smooth
                >Biografia</NavHashLink></li> 
                <li className="navbar__li--sm"><NavHashLink
                to="/gallery"
                activeClassName="selected"
                smooth
                >Galeria</NavHashLink></li>
                <li className="navbar__li--sm"><NavHashLink
                to="/contact"
                activeClassName="selected"
                smooth
                >Kontakt</NavHashLink></li>            
            </ul>
        </nav>
    )
}

export default NavbarBiography;