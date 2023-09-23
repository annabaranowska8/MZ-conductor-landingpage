import React from "react";
import { useTranslation } from "react-i18next";

const Item = ({ mediaLink, imgSrc, title, description }) => {
  const { t } = useTranslation();
  return (
    <div className="media-item_container">
      <img src={imgSrc} alt="Martyna Zych" className="media-item_center-img" />
      <div className="media-item_text">
        <div>
          <div className="media-item_title">{title}</div>
          <div className="media-item_description">{description}</div>
        </div>
        <div>
          <a href={mediaLink} target="_blank" className="media-item_see-more">
            <div>{t("see_more")}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
