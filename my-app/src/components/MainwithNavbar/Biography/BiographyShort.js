import React from "react";
import {Link} from "react-router-dom";

const BiographyShort = () => {
    return (
        <div className="biography" id="biography">
            <div className="biography__content">
                <div className="biography__content--left">
                    <div className="biography__content--left__content">
                        <h2 className="biography__content--title">Biografia</h2>
                        <p className="biography__content--text">Martyna Zych jest ambitną polską dyrygentką skupioną na czeskiej muzyce. Jako jedyny dyrygent w Polsce posiada rękopis do IV Symfonii d-moll op. 13 Antonína Dvořáka, dzięki współpracy z Muzeum Antonína Dvořáka w Pradze. Napisała wiele prac analitycznych dotyczących utworów czeskich kompozytorów, porównując partytury z rękopisami, listami oraz historią. Podczas pracy nad czeskim repertuarem zależy jej przede wszystkim na prawdzie wykonawczej, zgodnie z zamiarami kompozytora oraz tradycją jego kraju. <br/><br/>
                        Została wybrana jako dyrygent Festiwalu Talentinum w Filharmonii Bohuslava Martinů w Zlínie, gdzie będzie współpracować z młodymi, czeskimi solistami w maju 2022 roku. <br/><br/>
                        Wielokrotnie była asystentką czeskich i polskich dyrygentów, m.in.: Jiří Petdlíka, Chuheia Iwasakiego, Massimiliano Caldiego, Dawida Runtza. Współpracowała z: Pilzeńską Filharmonią (przy Mojej Ojczyźnie Bedřicha Smetany podczas festiwalu Smetanovské dny),  Orkiestrą Polskiego Radia, Filharmonią Podkarpacką, Akademicką Orkiestrą Uniwersytetu Muzycznego Fryderyka Chopina. Jako asystentka miała okazję poznać wiele tradycji wykonawczych utworów Antonína Dvořáka oraz Bedřicha Smetany, a także poszerzyć swoją wiedzę dotyczącą czeskiej muzyki podczas spotkań, m.in. z: Petrem Dvořákiem (potomkiem kompozytora), Martinem Kubelíkiem (synem Rafaela Kubelika), Tomášem Braunerem, Robertem Kružíkiem, Norbertem Baxą. Dodatkowo, mówi biegle w języku czeskim, dzięki czemu z łatwością może współpracować z czeskimi solistami. Ponadto, jako altowiolistka w Polskiej Orkiestrze Sinfonia Iuventus im. Jerzego Semkowa, ma możliwość pracować z wybitnymi dyrygentami nad szerokim repertuarem od strony praktyczno-wykonawczej. 
                        Jest osobą pełną energii, która pragnie przekazać swoją szczerą pasję muzykom orkiestrowym oraz szerzyć prawdę wykonawczą czeskiej muzyki.</p>  
                        {/* <button className="biography__content--button"><Link to="/biography">Zobacz więcej</Link></button>                           */}
                    </div>
                   
                </div>
                <div className="biography__content--right"/>

             
            </div>

        </div>
    )
}

export default BiographyShort;