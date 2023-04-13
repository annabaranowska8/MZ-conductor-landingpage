import React from "react";
import { useTranslation } from "react-i18next";
import Item from "./Item";

const Media = () => {
  const { t } = useTranslation();

  return (
    <div id="media" className="media_container">
      <h2 className="media_container--title">{ t ("title_media")}</h2>
      <div className="media_container--items">
        {/* Iuve */}
        <Item
          mediaLink="https://sinfoniaiuventus.pl/bedrich-smetana-moja-ojczyzna-serce-czech/"
          imgSrc="/assets/IuveSmetana-26.02.2023/POSI-smetana-full-249-min.jpg"
          description="Iuventus"
        />
        {/* Karlove vary */}
        <Item
          mediaLink="https://www.klasikaplus.cz/vyhled/item/8039-karlovarsky-symfonicky-orchestr-v-nove-sezone-s-novym-sefdirigentem"
          imgSrc="/assets/IuveSmetana-26.02.2023/POSI-smetana-full-230-min.jpg"
          description="Karlove Vary"
        />
        {/* Talentinum */}
        <Item
          mediaLink="https://www.filharmonie-zlin.cz/951a-a7-talentinum-2022"
          imgSrc="/assets/Talentinum2022/2022-05-19-fbm-talentinum_006 (1).jpg"
          description="Talentinum"
        />
        {/* Dźwiękami Nadziei */}
        <Item
          mediaLink="https://www.polskieradio.pl/8/410/Artykul/2929544,Martyna-Zych-granie-muzyki-daje-nadzieje?fbclid=IwAR1t1oJ9l9sx0qOT3aPkX5IgNjWrrUTPURjyVI4bsTgdU0zakmjmvU09dH4"
          imgSrc="/assets/DzwiekamiNadziei2022/koncert_dzwiekami_nadziei_00189.jpg"
          description="Dźwiękami Nadziei"
        />
      </div>
    </div>
  );
};

export default Media;
