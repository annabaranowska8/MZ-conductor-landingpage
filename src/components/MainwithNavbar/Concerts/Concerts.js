import React from "react";

const Concerts = () => {

    const handleOnClick = (e) => {
        e.preventDefault();
    }

    return (
        <div className="concerts" id="concerts">
            <div class="concerts__container">
                <h2 className="concerts__container--title">Concerts</h2>
                <ul className="concerts__container--events_list">
                    <li className="single_event_list">
                        <a href="#" onClick={handleOnClick}>
                            <div className="event_list_entry event_date">May 19, 2022</div>
                            <div className="event_list_entry event_event">Talentinum Festival</div>
                            <div className="event_list_entry event_location">Philharmonie Bohuslava Martinů, Zlin</div>
                            <div className="event_list_entry event_program">Repertoire</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a href="#" onClick={handleOnClick}>
                            <div className="event_list_entry event_date">May 19, 2022</div>
                            <div className="event_list_entry event_event">Talentinum Festival</div>
                            <div className="event_list_entry event_location">Philharmonie Bohuslava Martinů, Zlin</div>
                            <div className="event_list_entry event_program">Repertoire</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a href="#" onClick={handleOnClick}>
                            <div className="event_list_entry event_date">May 19, 2022</div>
                            <div className="event_list_entry event_event">Talentinum Festival</div>
                            <div className="event_list_entry event_location">Philharmonie Bohuslava Martinů, Zlin</div>
                            <div className="event_list_entry event_program">Repertoire</div>
                        </a>       
                    </li>                  
                </ul>
            </div>
        </div>
    )
}

export default Concerts;