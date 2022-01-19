import React from "react";
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome';
import { faQuoteRight } from '../../../node_modules/@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

const Quotes = () => {
    const quoteRight = <FontAwesomeIcon icon={faQuoteRight} />
    const { t } = useTranslation();

    return (
        <div className="quotes">
            <div className="quotes__container">
                <div className="quotes__container--decoration">{quoteRight}</div>
                <div className="quotes__container--singleQuote">
                    <p>{ t ("quote")}</p>    
                </div>
                <span>{ t ("quote_author")}</span>
            </div>
        </div>
    )
}

export default Quotes;