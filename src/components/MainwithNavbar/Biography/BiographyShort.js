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
                        <div className="biography__content--text">
                            { t ("biography")}                  
                        </div>
                        {/* <button className="biography__content--button"><Link to="/biography">Zobacz więcej</Link></button>                           */}
                    </div>
                   
                </div>
                <div className="biography__content--right"/>

             
            </div>

        </div>
    )
}

export default BiographyShort;