import React from "react";
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";

const BiographyShort = () => {
    const { t } = useTranslation();

    return (
        <div className="biography" id="biography">
            <div className="biography__content">
                <div className="biography__content--left">
                    <div className="biography__content--left__content">
                        <h2 className="biography__content--title">{ t ("title_biography")}</h2>
                        <p className="biography__content--text">{ t ("biography_one")}<br/><br/>
                        Martyna Zych is an active condcutor: she was an assistant during the project <span className="nobreak"><em>Smetanowské dny</em></span> with Má Vlast by Bedřich Smetana. Furthermore, she was the assistant of renown conductors like: Jiří Petrdlík, Chuhei Iwasaki, Massimiliano Caldi, Dawid Runtz. In addition, she has developed successful experience with the most famous orchestras in Czech Republic and Poland:<br/><br/>
                        – The Pilsen Philharmonic (02/2021) <br/>
                        – The Rzeszów Philharmonic (2018 – 2021) <br/>
                        – The Polish Radio Symphony Orchestra (2016 – 2021)<br/> 
                        <br/>
                        In the 2021/2022 season, Martyna Zych will debut with The Bohuslav Martinů Philharmonic during The <em>Talentinum</em> Festival.
                        {/* <span className="nobreak"> */}
                            {/* </span> */}
                            <br/><br/>
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