import React from "react";
import { useTranslation } from "react-i18next";
import Item from "./Item";

const Media = () => {
  const { t } = useTranslation();

  return (
    <div id="media" className="media_container">
      {/* <h2 className="media_container--title">{t("title_media")}</h2> */}
      <div className="media_container--items">
        <div className="media_container--top">
          {/* La Maestra */}
          <Item
            mediaLink={t("la_maestra_website")}
            imgSrc="/assets/La-Maestra-2024.png"
            title={t("la_maestra_title")}
            description={t("la_maestra_desc")}
          />
          {/* Dyrygent Rezydent */}
          <Item
            mediaLink={t("media_rezydetn_olsztyn_website")}
            imgSrc="./assets/muzyka-bez-granic-tarnow.jpg"
            title={t("media_rezydetn_olsztyn_title")}
            description={t("media_rezydetn_olsztyn_desc")}
          />
        </div>
        <div className="media_container--bottom">
          {/* IFFCC */}
          <Item
            mediaLink={t("media_IFFCC_website")}
            imgSrc="/assets/POSI-smetana-full.jpg"
            title={t("media_IFFCC_title")}
            description={t("media_IFFCC_desc")}
          />
          {/* Karlove vary */}
          <Item
            mediaLink={t("media_karlove_wary_website")}
            imgSrc="/assets/Karlove_Vary.jpg"
            title={t("media_karlove_wary_title")}
            description={t("media_karlove_wary_desc")}
          />
        </div>
      </div>
    </div>
  );
};

export default Media;
