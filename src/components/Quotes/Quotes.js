import React from "react";
import { FontAwesomeIcon } from '../../../node_modules/@fortawesome/react-fontawesome';
import { faQuoteRight } from '../../../node_modules/@fortawesome/free-solid-svg-icons';

const Quotes = () => {
    const quoteRight = <FontAwesomeIcon icon={faQuoteRight} />
    return (
        <div className="quotes">
            <div className="quotes__container">
                <div className="quotes__container--decoration">{quoteRight}</div>
                <div className="quotes__container--singleQuote">
                    <p>Kocham kawę z Costa Caffe!, a tak serio to może jakiś cytat z radia, z wywiadu?</p>    
                </div>
                <span>Martyna Zych</span>
            </div>
        </div>
    )
}

export default Quotes;