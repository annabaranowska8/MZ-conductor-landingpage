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
                        <a href="https://www.filharmonie-zlin.cz/951a-a7-talentinum-2022" onClick={handleOnClick}>
                            <div className="event_list_entry event_date">May 19, 2022</div>
                            <div className="event_list_entry event_event">Talentinum Festival</div>
                            <div className="event_list_entry event_location">Philharmonie Bohuslava Martinů, Zlin</div>
                            <div className="event_list_entry event_program">Repertoire</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a href="https://chopin.edu.pl/szczegoly-wydarzenia/233_koncert-dyplomantow-umfc-z-udzialem-orkiestry-polskiego-radia-w-warszawie" onClick={handleOnClick}>
                            <div className="event_list_entry event_date">June 26, 2021</div>
                            <div className="event_list_entry event_event">Diploma Concert</div>
                            <div className="event_list_entry event_location">Polish Radio Symphony Orchestra, Warsaw</div>
                            <div className="event_list_entry event_program">Ludwig van Beethoven, Symphony No. 8 in F major op. 93<br/>Chr. Bach, Viola Concerto in c minor</div>
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