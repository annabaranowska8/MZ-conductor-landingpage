import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarLower from "./NavbarLower";
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome';
import { faFacebookF } from '../../../node_modules/@fortawesome/free-brands-svg-icons';
import { faInstagram } from '../../../node_modules/@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '../../../node_modules/@fortawesome/free-brands-svg-icons';
import { faAngleDoubleDown } from '../../../node_modules/@fortawesome/free-solid-svg-icons';
import { faBars } from '../../../node_modules/@fortawesome/free-solid-svg-icons';

const MainView = () => {

    const facebook = <FontAwesomeIcon icon={faFacebookF} />
    const instagram = <FontAwesomeIcon icon={faInstagram} />
    const linkedIn = <FontAwesomeIcon icon={faLinkedinIn} />
    const angleDouble = <FontAwesomeIcon icon={faAngleDoubleDown} />
    const menu = <FontAwesomeIcon icon={faBars} />

    const [ scroll, setScroll] = useState();
    const [ scrollMobile, setScrollMobile ] = useState()
    const [ bars, setBars ] = useState();
    
    useEffect(() => {
        window.innerWidth >= 993 && setScroll(window.scrollY > 80);
        setBars(false)
        window.addEventListener("scroll", () => {
            window.innerWidth >= 993 && (setScroll(window.scrollY > 80) && setBars(false));
        }, { passive: true });
    }, []);

    useEffect(() => {
        setScrollMobile(window.innerWidth <= 992);
        setBars(window.innerWidth <= 993);
        window.addEventListener("scroll", () => {
        setScrollMobile(window.innerWidth < 993);
        setBars(window.innerWidth < 993);
        }, { passive: true });
    }, []);;

    const handleClick = () => {
        setBars(false)
    }
    return (
        <>
        {console.log("scroll", scroll )}
        {console.log("scrollMobile", scrollMobile )}
        {/* {console.log("setBars", setBars )} */}
        <div className="main">
            <div className="angleDouble">{angleDouble}</div>
            <div className={bars ? "bars__header" : "bars__none"}>
                <div className={bars ? "bars" : "bars__none"} onClick={handleClick} >{menu}</div>
                <div className={`${scroll ? "main__socialMedia--scroll" : (bars ? "bars__noMenu" : (scrollMobile ? "main__socialMedia--Mobile" : "main__socialMedia"))}`}>
                {/* <div className={`${scroll ? "main__socialMedia--scroll" : "main__socialMedia"}`}> */}
                    <div className="socialMedia__emptyDiv"></div>
                    <div className="socialMedia__navbar">
                        <Navbar />
                    </div>
                    <div className="socialMedia--sm">
                        <div className="socialMedia"><a href="https://www.facebook.com/martyna.zych.conductor">{facebook}</a></div>
                        <div className="socialMedia"><a href="https://www.instagram.com/martyna.zych_conductor/">{instagram}</a></div>
                        <div className="socialMedia"><a href="https://www.linkedin.com/in/martyna-zych-b69a4514a/">{linkedIn}</a></div>
                    </div>
                </div>
            </div>
            <div className="main__navbar">
                <div className="main__navbar--background">
                    <div className="main__navbar--background--left"/>
                    <div className="main__navbar--background--right">
                        <NavbarLower/>
                        <div className={scroll ? "main__navbar--background--right--title--hidden" : "main__navbar--background--right--title"}>
                        <h1>Martyna <span>Zych</span></h1> 
                        </div>
                        <div className="main__navbar--background--right--content">
                            <h2 className="description">Conductor</h2>
                            <div className="description__container">
                                <div className="description--left">
                                    <p className="description">Antonín Dvořák</p>  
                                    <p className="description">Bedřich Smetana</p>
                                    <p className="description">Bohuslav Martinů</p>    
                                </div>
                                <div className="description--right">
                                    <p className="description">Josef Suk</p>
                                    <p className="description">Leoš Janáček</p> 
                                    <p className="description">Zdeněk Fibich</p>                                                              
                                </div>                                 
                            </div> 
                        </div>
                    </div>
                </div>

            </div>
            <div className="main__content">

            </div>
        </div>
        </>
    )
}

export default MainView;