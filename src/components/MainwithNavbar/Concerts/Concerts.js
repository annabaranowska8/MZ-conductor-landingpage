import React from "react";
import { useTranslation } from "react-i18next";

const Concerts = () => {
    const { t } = useTranslation();

    return (
        <div className="concerts" id="concerts">
            <div className="concerts__container">
                <h2 className="concerts__container--title">{ t ("title_concerts")}</h2>
                <ul className="concerts__container--events_list">
                    <li className="single_event_list">
                        <a href={t("calendar_website_kalisz_28_04_23")} target="_blank">
                            <div className="event_list_entry event_date">{t ("calendar_date_kalisz_28_04_23")}</div>
                            <div className="event_list_entry event_event">{t ("calendar_name_kalisz_28_04_23")}</div>
                            <div className="event_list_entry event_location">{t ("calendar_place_kalisz_28_04_23")}</div>
                            <div className="event_list_entry event_program">{t ("calendar_more")}</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a href={t("calendar_website_warsaw_26_02_23")} target="_blank">
                            <div className="event_list_entry event_date">{t ("calendar_date_warsaw_26_02_23")}</div>
                            <div className="event_list_entry event_event">{t ("calendar_name_warsaw_26_02_23")}</div>
                            <div className="event_list_entry event_location">{t ("calendar_place_warsaw_26_02_23")}</div>
                            <div className="event_list_entry event_program">{t ("calendar_more")}</div>
                        </a>       
                    </li>
                    <li className="single_event_list">
                        <a href={t("calendar_website_tarnow_zsm_24_11_22")} target="_blank">
                            <div className="event_list_entry event_date">{t ("calendar_date_tarnow_zsm_24_11_22")}</div>
                            <div className="event_list_entry event_event">{t ("calendar_name_tarnow_zsm_24_11_22")}</div>
                            <div className="event_list_entry event_location">{t ("calendar_place_tarnow_zsm_24_11_22")}</div>
                            <div className="event_list_entry event_program">{t ("calendar_more")}</div>
                        </a>       
                    </li>
                    {/* "calendar_date_tarnow_zsm_24_11_22": "Listopad 24, 2022",
                    "calendar_name_tarnow_zsm_24_11_22": "BEDŘICH SMETANA\nANTONÍN DVOŘÁK",
                    "calendar_place_tarnow_zsm_24_11_22": "KARLOVARSKÝ SYMFONICKÝ ORCHESTR,\nKarlové Vary",
                    "calendar_website_tarnow_zsm_24_11_22": "https://www.kso.cz/www/program/2022/9", */}
                </ul>
            </div>
        </div>
    )
}

export default Concerts;