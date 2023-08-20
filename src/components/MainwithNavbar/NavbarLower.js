import React, {useState, useEffect} from "react";
import { NavHashLink } from 'react-router-hash-link';
import { useTranslation } from "react-i18next";

const NavbarLower = () => {

    const [ scroll, setScroll] = useState();
    const { t } = useTranslation();
    // const [ scrollMobile, setScrollMobile ] = useState()
    
    useEffect(() => {
        window.innerWidth >= 993 && setScroll(window.scrollY > 80);
        window.addEventListener("scroll", () => {
            window.innerWidth >= 993 && setScroll(window.scrollY > 80);
        }, { passive: true });
    }, []);

    return (
        <nav className={`${scroll ? "navbar" : "navbar navbar--sm"}`}>
            {/* <nav className={scroll ? "navbar navbar--sm" : "navbar"}> */}
            <ul className={`${scroll ? "navbar__ul--sm" : "navbar__ul"}`}>
            {/* <ul className={scroll ? "navbar__ul--sm" : "navbar__ul"}> */}
            <li className= "navbar__li--dnone"><NavHashLink
            // <li className={scroll ? "navbar__li--sm" : "navbar__li--dnone"}><NavHashLink
                to="/#"
                activeClassName="selected"
                smooth
                >{ t ("menu_home")}</NavHashLink></li>
                <li className={`${scroll ? "navbar__li--dnone" : "navbar__li--sm"}`}><NavHashLink
                to="/#media"
                activeClassName="selected"
                smooth
                >{ t ("menu_media")}</NavHashLink></li> 
                <li className={`${scroll ? "navbar__li--dnone" : "navbar__li--sm"}`}><NavHashLink
                to="/#concerts"
                activeClassName="selected"
                smooth
                >{ t ("menu_concerts")}</NavHashLink></li> 
                <li className={`${scroll ? "navbar__li--dnone" : "navbar__li--sm"}`}><NavHashLink
                to="/#biography"
                activeClassName="selected"
                smooth
                >{ t ("menu_biography")}</NavHashLink></li> 
                {/* <li className={`${scroll ? "navbar__li--dnone" : "navbar__li--sm"}`}><NavHashLink
                to="/#gallery"
                activeClassName="selected"
                smooth
                >{ t ("menu_gallery")}</NavHashLink></li> */}
                <li className={`${scroll ? "navbar__li--dnone" : "navbar__li--sm"}`}><NavHashLink
                to="/#contact"
                activeClassName="selected"
                smooth
                >{ t ("menu_contact")}</NavHashLink></li>            
            </ul>
        </nav>
    )
}

export default NavbarLower;