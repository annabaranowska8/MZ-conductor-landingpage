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
        <div className="media_container--top">
          {/* Iuve */}
          <Item
            mediaLink="https://sinfoniaiuventus.pl/bedrich-smetana-moja-ojczyzna-serce-czech/"
            imgSrc="/assets/IuveSmetana-26.02.2023/POSI-smetana-full-249-min.jpg"
            title={t("media_iuventus_title")}
            description={t("media_iuventus_desc")}
          />
          {/* Karlove vary */}
          <Item
            mediaLink="https://www.klasikaplus.cz/vyhled/item/8039-karlovarsky-symfonicky-orchestr-v-nove-sezone-s-novym-sefdirigentem"
            imgSrc="/assets/Karlove_Vary.jpg"
            title={t("media_karlove_wary_title")}
            description={t("media_karlove_wary_desc")}
          />
        </div>
        <div className="media_container--bottom">
          {/* Talentinum */}
          <Item
            mediaLink="https://www.filharmonie-zlin.cz/951a-a7-talentinum-2022"
            imgSrc="/assets/Talentinum2022/2022-05-19-fbm-talentinum_006 (1).jpg"
            title={t("media_talentinum_title")}
            description={t("media_talentinum_desc")}
          />
          {/* Dźwiękami Nadziei */}
          <Item
            mediaLink="https://www.polskieradio.pl/8/410/Artykul/2929544,Martyna-Zych-granie-muzyki-daje-nadzieje?fbclid=IwAR1t1oJ9l9sx0qOT3aPkX5IgNjWrrUTPURjyVI4bsTgdU0zakmjmvU09dH4"
            imgSrc="/assets/DzwiekamiNadziei2022/koncert_dzwiekami_nadziei_00189.jpg"
            title={t("media_dzwiekami_nadziei_title")}
            description={t("media_dzwiekami_nadziei_desc")}
          />
        </div>
      </div>
    </div>
  );
};

export default Media;
