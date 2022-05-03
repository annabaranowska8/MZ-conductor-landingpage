import React from "react";
import { useTranslation } from "react-i18next";

const Concerts = () => {
    const { t } = useTranslation();

    return (
        <div className="concerts" id="concerts">
            <div class="concerts__container">
                <h2 className="concerts__container--title">{ t ("title_concerts")}</h2>
                <ul className="concerts__container--events_list">
                    <li className="single_event_list">
                        <a href="https://www.filharmonie-zlin.cz/951a-a7-talentinum-2022" target="_blank">
                            <div className="event_list_entry event_date">May 19, 2022</div>
                            <div className="event_list_entry event_event">Talentinum Festival</div>
                            <div className="event_list_entry event_location">Philharmonie Bohuslava Martinů, Zlin</div>
                            <div className="event_list_entry event_program">Click for more details...</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a>
                            <div className="event_list_entry event_date">April 3, 2022</div>
                            <div className="event_list_entry event_event">"Sound of hope"</div>
                            <div className="event_list_entry event_location">Church "Podwyższenia Krzyża", Rzeszów</div>
                            <div className="event_list_entry event_program">Concert played by ukrainian musicians</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a href="https://chopin.edu.pl/szczegoly-wydarzenia/233_koncert-dyplomantow-umfc-z-udzialem-orkiestry-polskiego-radia-w-warszawie" target="_blank">
                            <div className="event_list_entry event_date">June 26, 2021</div>
                            <div className="event_list_entry event_event">Diploma Concert</div>
                            <div className="event_list_entry event_location">Polish Radio Symphony Orchestra, Warsaw</div>
                            <div className="event_list_entry event_program">Click for more details...</div>
                        </a>       
                    </li>
                    {/* <li className="single_event_list">
                        <a href="#" onClick={handleOnClick}>
                            <div className="event_list_entry event_date">May 19, 2022</div>
                            <div className="event_list_entry event_event">Talentinum Festival</div>
                            <div className="event_list_entry event_location">Philharmonie Bohuslava Martinů, Zlin</div>
                            <div className="event_list_entry event_program">Repertoire</div>
                        </a>       
                    </li>                   */}
                </ul>
            </div>
        </div>
    )
}

export default Concerts;