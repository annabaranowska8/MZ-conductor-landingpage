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
                        <a href={t ("calendar_website_zlin")} target="_blank">
                            <div className="event_list_entry event_date">{t ("calendar_date_zlin")}</div>
                            <div className="event_list_entry event_event">{t ("calendar_name_zlin")}</div>
                            <div className="event_list_entry event_location">{t ("calendar_place_zlin")}</div>
                            <div className="event_list_entry event_program">{t ("calendar_more")}</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a>
                            <div className="event_list_entry event_date">{t ("calendar_date_rzeszow")}</div>
                            <div className="event_list_entry event_event">{t ("calendar_name_rzeszow")}</div>
                            <div className="event_list_entry event_location">{t ("calendar_place_rzeszow")}</div>
                            <div className="event_list_entry event_program">{t ("calendar_more_rzeszow")}</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a href={t("calendar_website_warsaw")} target="_blank">
                            <div className="event_list_entry event_date">{t ("calendar_date_warsaw")}</div>
                            <div className="event_list_entry event_event">{t ("calendar_name_warsaw")}</div>
                            <div className="event_list_entry event_location">{t ("calendar_place_warsaw")}</div>
                            <div className="event_list_entry event_program">{t ("calendar_more")}</div>
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