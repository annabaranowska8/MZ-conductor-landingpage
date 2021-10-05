import React from "react";
import Navbar from "./Navbar";
import MainFoto from "../../assets/Main.jpg"

const MainView = () => {
    return (
        <>
        <div className="main">
            <div className="main__navbar">
                <div className="main__navbar--background">
                    <img className="main__navbar--background__img" src={MainFoto}/>                    
                </div>
                <Navbar/>
            </div>
            <div className="main__content">

            </div>
        </div>
        </>
    )
}

export default MainView;