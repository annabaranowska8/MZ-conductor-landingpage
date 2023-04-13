import React from "react";
import { useTranslation } from "react-i18next";

const Item = ({ mediaLink, imgSrc, description }) => {
  const { t } = useTranslation();
  return (
    <div className="media-item_container">
      <a href={mediaLink}>
        <img src={imgSrc} alt="Martyna Zych" />
        <div className="media-item_text">
          <div>{description}</div>
          <div>{t("see_more")}</div>
        </div>
      </a>
    </div>
  );
};

export default Item;
