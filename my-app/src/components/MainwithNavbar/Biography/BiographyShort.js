import React from "react";
import {Link} from "react-router-dom";

const BiographyShort = () => {
    return (
        <div className="biography" id="biography">
            <div className="biography__content">
                <div className="biography__content--left">
                    <div className="biography__content--left__content">
                        <h2 className="biography__content--title">Biography</h2>
                        <p className="biography__content--text">Martyna Zych is one of the most talented young conductor in Poland. Her great passion is Czech music, she is the only one conductor in Poland who has manuscript to Antonín Dvořák Symphony No. 4 in d minor op. 13 due to cooperation with Antonín Dvořák’s Museum in Prague. She wrote a consistent amount of works about Antonín Dvořák and Bedřich Smetana. Her aim is to conduct with the composer’s truth, therefore she conducts with manuscritps, letters, traditions and the history of Czech.<br/><br/>
                        Martyna Zych is an active condcutor: she was an assistant during the project <span className="nobreak"><em>Smetanowské dny</em></span> with Má Vlast by Bedřich Smetana. Furthermore, she was the assistant of renown conductors like: Jiří Petrdlík, Chuhei Iwasaki, Massimiliano Caldi, Dawid Runtz. In addition, she has developed successful experience with the most famous orchestras in Czech Republic and Poland:<br/><br/>
                        – The Pilsen Philharmonic (02/2021) <br/>
                        – The Rzeszów Philharmonic (2018 – 2021) <br/>
                        – The Polish Radio Symphony Orchestra (2016 – 2021)<br/> 
                        <br/>
                        In the 2021/2022 season, Martyna Zych will debut with The Bohuslav Martinů Philharmonic <span className="nobreak">during The <em>Talentinum</em> Festival.</span><br/><br/>
                        She studied at The Fryderyk Chopin University of Music in Warsaw in conducting class of prof. Tomasz Bugaj and viola of prof. Piotr Reichert. Moreover, she took part in numerous masterclasses, such as: opera conudcting with Carlo Montanaro, G. Rossini – Stabat Mater with Massimiliano Caldi. Martyna was also a conductor during many orchestral courses: International Workshops for teenagers in Szczecin, Janowiec Music Master Courses and Gorlice. <br/><br/>
                        As a violist she is a member of The Polish Sinfonia Iuventus Orchestra.</p>  
                        {/* <button className="biography__content--button"><Link to="/biography">Zobacz więcej</Link></button>                           */}
                    </div>
                   
                </div>
                <div className="biography__content--right"/>

             
            </div>

        </div>
    )
}

export default BiographyShort;