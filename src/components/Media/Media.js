import React from "react";
import { useTranslation } from "react-i18next";
import Carousel from "../helpers/Carousel/Carousel";
import Item from "./Item";

const Media = () => {
  const { t } = useTranslation();

  return (
    <div id="media" className="media_container">
      {/* <h2 className="media_container--title">{t("title_media")}</h2> */}
      <div className="media_container--items">
        <Carousel />
      </div>
    </div>
  );
};

export default Media;
