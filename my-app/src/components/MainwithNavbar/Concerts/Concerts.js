import React from "react";

const Concerts = () => {
    return (
        <div className="concerts">
            <div class="concerts__container">
                <h2 className="concerts__container--title">Koncerty</h2>
                <ul className="concerts__container--events_list">
                    <li className="single_event_list">
                        <a href="#">
                            <div className="event_list_entry event_date">Maj 19, 2022</div>
                            <div className="event_list_entry event_event">Talentinum Festival</div>
                            <div className="event_list_entry event_location">Filharmonia Bohuslava Martinů, Zlin</div>
                            <div className="event_list_entry event_program">Program</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a href="#">
                            <div className="event_list_entry event_date">Maj 19, 2022</div>
                            <div className="event_list_entry event_event">Talentinum Festival</div>
                            <div className="event_list_entry event_location">Filharmonia Bohuslava Martinů, Zlin</div>
                            <div className="event_list_entry event_program">Program</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a href="#">
                            <div className="event_list_entry event_date">Maj 19, 2022</div>
                            <div className="event_list_entry event_event">Talentinum Festival</div>
                            <div className="event_list_entry event_location">Filharmonia Bohuslava Martinů, Zlin</div>
                            <div className="event_list_entry event_program">Program</div>
                        </a>       
                    </li>                  
                </ul>
            </div>
        </div>
    )
}

export default Concerts;