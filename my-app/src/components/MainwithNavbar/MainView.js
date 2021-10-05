import React from "react";
import Navbar from "./Navbar";

const MainView = () => {
    return (
        <>
        <div className="main">
            <div className="main__navbar">
                <div className="main__navbar--underline" />
                <Navbar/>
            </div>
            <div className="main__content">

            </div>
        </div>
        </>
    )
}

export default MainView;