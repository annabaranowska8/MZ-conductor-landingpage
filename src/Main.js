import React from "react";
import MainView from "./components/MainwithNavbar/MainView";
import BiographyShort from "./components/MainwithNavbar/Biography/BiographyShort";
import Concerts from "./components/MainwithNavbar/Concerts/Concerts";
import Gallery from "./components/MainwithNavbar/Gallery/Gallery";
import Contact from "./components/MainwithNavbar/Contact/Contact";
import Quotes from "./components/Quotes/Quotes";
import { Helmet } from "react-helmet";

function Main() {
  const ldJson = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Martyna Zych",
    sameAs: "https://www.instagram.com/martyna.zych_conductor/",
    sameAs: "https://www.facebook.com/martyna.zych.conductor",
    sameAs: "https://www.linkedin.com/in/martyna-zych-b69a4514a",
    jobTitle: "Music Conductor"
  };

  return (
    <>
      <div className="mainBackground">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Martyna Zych Conductor</title>
          <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
        </Helmet>
        <MainView />
        <Concerts />
        <BiographyShort />
        <Quotes />
        <Gallery />
      </div>
      <Contact />
    </>
  );
}

export default Main;
