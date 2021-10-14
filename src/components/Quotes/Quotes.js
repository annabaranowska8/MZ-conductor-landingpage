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
                    <p>Her maturation, although still nearing completion given her young age,<br/> is very fast and I am sure that in few years she could achieve<br/> very significant results.</p>    
                </div>
                <span>Massimiliano Caldi</span>
            </div>
        </div>
    )
}

export default Quotes;