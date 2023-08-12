import React from "react";
import { useTranslation } from "react-i18next";

const Concerts = () => {
  const { t } = useTranslation();

  return (
    <div className="concerts" id="concerts">
      <div className="concerts__container">
        <h2 className="concerts__container--title">{t("title_concerts")}</h2>
        <ul className="concerts__container--events_list">
          <li className="single_event_list">
            <a href={t("calendar_website_hungary_3-10_09_23")} target="_blank">
              <div className="event_list_entry event_date">
                {t("calendar_date_hungary_3-10_09_23")}
              </div>
              <div className="event_list_entry event_event">
                {t("calendar_name_hungary_3-10_09_23")}
              </div>
              <div className="event_list_entry event_location">
                {t("calendar_place_hungary_3-10_09_23")}
              </div>
              <div className="event_list_entry event_program">
                {t("see_more")}
              </div>
            </a>
          </li>
          <li className="single_event_list">
            <a href={t("calendar_website_olsztyn_23_02_2024")} target="_blank">
              <div className="event_list_entry event_date">
                {t("calendar_date_olsztyn_23_02_2024")}
              </div>
              <div className="event_list_entry event_event">
                {t("calendar_name_olsztyn_23_02_2024")}
              </div>
              <div className="event_list_entry event_location">
                {t("calendar_place_olsztyn_23_02_2024")}
              </div>
              <div className="event_list_entry event_program">
                {t("see_more")}
              </div>
            </a>
          </li>
          <li className="single_event_list">
            <a href={t("calendar_website_olsztyn_01_03_2024")} target="_blank">
              <div className="event_list_entry event_date">
                {t("calendar_date_olsztyn_01_03_2024")}
              </div>
              <div className="event_list_entry event_event">
                {t("calendar_name_olsztyn_01_03_2024")}
              </div>
              <div className="event_list_entry event_location">
                {t("calendar_place_olsztyn_01_03_2024")}
              </div>
              <div className="event_list_entry event_program">
                {t("see_more")}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Concerts;
