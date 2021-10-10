import React from "react";
import MainView from "./components/MainwithNavbar/MainView";
import Biography from "./components/MainwithNavbar/Biography/Biography";
import Concerts from "./components/MainwithNavbar/Concerts/Concerts";
import Gallery from "./components/MainwithNavbar/Gallery/Gallery";
import Contact from "./components/MainwithNavbar/Contact/Contact";
import Quotes from "./components/Quotes/Quotes";

function Main() {
  return (
    <>
      <div className="mainBackground">
        <MainView/>
        <Concerts />
        <Biography/>
        <Quotes />
        <Gallery />
      </div>
      <Contact />
    </>
  );
}

export default Main;
