import React, {useState, useEffect} from "react";
import { NavHashLink } from 'react-router-hash-link';


const Navbar = () => {

    const [ scroll, setScroll] = useState();
    const [ scrollMobile, setScrollMobile ] = useState()
    
    useEffect(() => {
        window.innerWidth >= 993 && setScroll(window.scrollY > 80);
        window.addEventListener("scroll", () => {
            window.innerWidth >= 993 && setScroll(window.scrollY > 80);
        }, { passive: true });
    }, []);

    useEffect(() => {
        setScrollMobile(window.innerWidth <= 992);
        window.addEventListener("scroll", () => {
        setScrollMobile(window.innerWidth < 993);
        }, { passive: true });
    }, []);;

    return (
        <nav >
            <ul >
            <li ><NavHashLink
                to="/#"
                activeClassName="selected"
                smooth
                >Home</NavHashLink></li>
                <li ><NavHashLink
                to="/#concerts"
                activeClassName="selected"
                smooth
                >Concerts</NavHashLink></li> 
                <li ><NavHashLink
                to="/#biography"
                activeClassName="selected"
                smooth
                >Biography</NavHashLink></li> 
                <li ><NavHashLink
                to="/#gallery"
                activeClassName="selected"
                smooth
                >Gallery</NavHashLink></li>
                <li ><NavHashLink
                to="/#contact"
                activeClassName="selected"
                smooth
                >Contact</NavHashLink></li>            
            </ul>
        </nav>
    )
}

export default Navbar;