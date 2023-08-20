import React from "react";
import { useTranslation } from "react-i18next";
import concertList from './concertList';

const Concerts = () => {
  const { t } = useTranslation();
console.log(concertList)

  return (
    <div className="concerts" id="concerts">
      <div className="concerts__container">
        <h2 className="concerts__container--title">{t("title_concerts")}</h2>
        <ul className="concerts__container--events_list">
            {concertList.map(concert => (
                <li className="single_event_list" key={concert.id}>
                <a href={t(concert.website)} target="_blank">
                  <div className="event_list_entry event_date">
                    {t(concert.date)}
                  </div>
                  <div className="event_list_entry event_event">
                    <span>{t(concert.compositor1)}</span>
                    {concert.compositor2 !== "" && <span>{t(concert.compositor2)}</span>}
                    {concert.compositor3 !== "" && <span>{t(concert.compositor3)}</span>}
                  </div>
                  <div className="event_list_entry event_location">
                    <span>{t(concert.building)}</span>
                    <span>{t(concert.country)}</span>
                  </div>
                  <div className="event_list_entry event_program">
                    <div className="see-more-btn">
                      {t("see_more")}
                    </div>
                  </div>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Concerts;
