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
                        <a href={t("calendar_website_warsaw_25_02_23")} target="_blank">
                            <div className="event_list_entry event_date">{t ("calendar_date_warsaw_25_02_23")}</div>
                            <div className="event_list_entry event_event">{t ("calendar_name_warsaw_25_02_23")}</div>
                            <div className="event_list_entry event_location">{t ("calendar_place_warsaw_25_02_23")}</div>
                            <div className="event_list_entry event_program">{t ("calendar_more")}</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a href={t("calendar_website_karlove_vary_22_09_22")} target="_blank">
                            <div className="event_list_entry event_date">{t ("calendar_date_karlove_vary_22_09_22")}</div>
                            <div className="event_list_entry event_event">{t ("calendar_name_karlove_vary_22_09_22")}</div>
                            <div className="event_list_entry event_location">{t ("calendar_place_karlove_vary_22_09_22")}</div>
                            <div className="event_list_entry event_program">{t ("calendar_more")}</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a href={t("calendar_website_zlin")} target="_blank">
                            <div className="event_list_entry event_date">{t ("calendar_date_zlin")}</div>
                            <div className="event_list_entry event_event">{t ("calendar_name_zlin")}</div>
                            <div className="event_list_entry event_location">{t ("calendar_place_zlin")}</div>
                            <div className="event_list_entry event_program">{t ("calendar_more")}</div>
                        </a>       
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Concerts;