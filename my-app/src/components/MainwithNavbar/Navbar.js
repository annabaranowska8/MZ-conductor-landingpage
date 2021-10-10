import React, {useState, useEffect} from "react";
import { NavHashLink } from 'react-router-hash-link';


const Navbar = () => {
    const [ scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 80);
        });
    }, []);
    return (
        <nav className={scroll ? "navbar navbar--sm" : "navbar"}>
            <ul className={scroll ? "navbar__ul--sm" : "navbar__ul"}>
            <li className={scroll ? "navbar__li--sm" : "navbar__li--dnone"}><NavHashLink
                to="/#"
                activeClassName="selected"
                smooth
                >Strona główna</NavHashLink></li>
                <li className={scroll ? "navbar__li--sm" : "navbar__li"}><NavHashLink
                to="/#concerts"
                activeClassName="selected"
                smooth
                >Koncerty</NavHashLink></li> 
                <li className={scroll ? "navbar__li--sm" : "navbar__li"}><NavHashLink
                to="/#biography"
                activeClassName="selected"
                smooth
                >Biografia</NavHashLink></li> 
                <li className={scroll ? "navbar__li--sm" : "navbar__li"}><NavHashLink
                to="/#gallery"
                activeClassName="selected"
                smooth
                >Galeria</NavHashLink></li>
                <li className={scroll ? "navbar__li--sm" : "navbar__li"}><NavHashLink
                to="/#contact"
                activeClassName="selected"
                smooth
                >Kontakt</NavHashLink></li>            
            </ul>
        </nav>
    )
}

export default Navbar;