import React from "react";
import MainView from "./components/MainwithNavbar/MainView";
import Biography from "./components/MainwithNavbar/Biography/Biography";
import Concerts from "./components/MainwithNavbar/Concerts/Concerts";

function Main() {
  return (
    <>
      <head>
        <script defer src="/your-path-to-fontawesome/js/brands.js"></script>
        <script defer src="/your-path-to-fontawesome/js/solid.js"></script>
        <script defer src="/your-path-to-fontawesome/js/fontawesome.js"></script>
      </head>
      <MainView/>
      <Concerts />
      <Biography/>
    </>
  );
}

export default Main;
