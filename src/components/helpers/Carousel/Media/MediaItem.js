import React from "react";
import { useTranslation } from "react-i18next";

const MediaItem = ({ mediaLink, imgSrc, title, description, isActive }) => {
  const { t } = useTranslation();

  const itemClassName = isActive ? "media-item_container active" : "media-item_container";

  return (
    <div className={itemClassName}>
      <img src={imgSrc} alt="Martyna Zych" className="media-item_center-img" />
      <div className="media-item_text">
        <div>
          <div className="media-item_title">{title}</div>
          <div className="media-item_description">{description}</div>
        </div>
        <div>
          <a href={mediaLink} className="media-item_see-more">
            <div>{t("see_more")}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaItem;
