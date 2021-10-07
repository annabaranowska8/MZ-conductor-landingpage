import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome'
import { fab } from '../../../node_modules/@fortawesome/free-brands-svg-icons'
import { facebookF } from '@fortawesome/free-solid-svg-icons'


const MainView = () => {

    const facebook = <FontAwesomeIcon icon={[{fab}, "facebook-f"]} />
    return (
        <>
        <div className="main">
            <div className="main__socialMedia">
                <div className="socialMedia">{facebook}</div>
                <div className="socialMedia">2</div>
                <div className="socialMedia">3</div>
            </div>
            <div className="main__navbar">
                <div className="main__navbar--background">
                    {/* <div className="main__navbar--background--linesUp"/>
                    <div className="main__navbar--background--linesDown"/> */}
                    <div className="main__navbar--background--left"/>
                    <div className="main__navbar--background--right">
                        <Navbar/>
                        <div className="main__navbar--background--right--title">
                        <h1>Martyna <span>Zych</span></h1> 
                        </div>
                        <div className="main__navbar--background--right--content">
                        <p className="description">Dyrygent czeskiej muzyki</p>  
                        <p className="description">Antonín Dvořák</p>  
                        <p className="description">Bedřich Smetana</p>                   
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