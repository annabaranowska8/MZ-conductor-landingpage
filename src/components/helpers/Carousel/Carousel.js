import React, { useState, useMemo } from "react";
import MediaItem from "./Media/MediaItem";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome';
import { faArrowRight } from '../../../../node_modules/@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '../../../../node_modules/@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {t} = useTranslation();

  const data = [

    {mediaLink:"https://sinfoniaiuventus.pl/bedrich-smetana-moja-ojczyzna-serce-czech/",
    imgSrc:"/assets/IuveSmetana-26.02.2023/POSI-smetana-full-249-min.jpg",
    title:t("media_iuventus_title"),
    description:t("media_iuventus_desc")},
  
  
    {mediaLink:"https://www.klasikaplus.cz/vyhled/item/8039-karlovarsky-symfonicky-orchestr-v-nove-sezone-s-novym-sefdirigentem",
    imgSrc:"/assets/Karlove_Vary.jpg",
    title:t("media_karlove_wary_title"),
    description:t("media_karlove_wary_desc")},
  
  
    {mediaLink:"https://www.filharmonie-zlin.cz/951a-a7-talentinum-2022",
    imgSrc:"/assets/Talentinum2022/2022-05-19-fbm-talentinum_006 (1).jpg",
    title:t("media_talentinum_title"),
    description:t("media_talentinum_desc")},
  
  
    {mediaLink:"https://www.polskieradio.pl/8/410/Artykul/2929544,Martyna-Zych-granie-muzyki-daje-nadzieje?fbclid:IwAR1t1oJ9l9sx0qOT3aPkX5IgNjWrrUTPURjyVI4bsTgdU0zakmjmvU09dH4",
    imgSrc:"/assets/DzwiekamiNadziei2022/koncert_dzwiekami_nadziei_00189.jpg",
    title:t("media_dzwiekami_nadziei_title"),
    description:t("media_dzwiekami_nadziei_desc")},
  ]

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return data.length - 1;
      } else {
        return newIndex;
      }
    });
  };
  
  const handleNextClick = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= data.length) {
        return 0;
      } else {
        return newIndex;
      }
    });
  };
  
  

  const itemsPerPage = useMemo(() => {
    const width = window.innerWidth;
    if (width >= 1300) {
      return 3;
    } else if (width >= 800) {
      return 2;
    } else {
      return 1;
    }
  }, []);

  const startIndex = useMemo(() => {
    const centerIndex = Math.floor(itemsPerPage / 2);
    const lastIndex = data.length - itemsPerPage;
  
    if (activeIndex < centerIndex) {
      return 0;
    } else if (activeIndex > lastIndex) {
      return lastIndex;
    } else {
      return activeIndex - centerIndex;
    }
  }, [activeIndex, itemsPerPage, data.length]);

  const visibleData = useMemo(() => {
    return data.slice(startIndex, startIndex + itemsPerPage);
  }, [startIndex, itemsPerPage]);

  const nextButton = <FontAwesomeIcon icon={faArrowRight} />;
  const prevButton = <FontAwesomeIcon icon={faArrowLeft} />;

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {visibleData.map((item, index) => (
          <MediaItem key={item.mediaLink} {...item} isActive={index === activeIndex} />
        ))}
      </div>
      <div className="carousel-prev" onClick={handlePrevClick}>{prevButton}</div>
      <div className="carousel-next" onClick={handleNextClick}>{nextButton}</div>
    </div>
  );
};

export default Carousel;
