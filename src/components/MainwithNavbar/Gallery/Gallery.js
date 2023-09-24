import React, {useEffect, useState} from "react";
import 'react-multi-carousel/lib/styles.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FontAwesomeIcon } from '../../../../node_modules/@fortawesome/react-fontawesome';
import { faArrowRight } from '../../../../node_modules/@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '../../../../node_modules/@fortawesome/free-solid-svg-icons';

const responsive = {
    0: {
      items: 1,
    },
    370: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1450: {
      items: 4,
    },
    1900: {
      items: 5,
    }
  };

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img src="/assets/IuveSmetana-26.02.2023/POSI-smetana-full-230-min.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="/assets/IuveSmetana-26.02.2023/POSI-smetana-full-249-min.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="/assets/Talentinum2022/2022-05-19-fbm-talentinum_050.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="/assets/IuveSmetana-26.02.2023/POSI-smetana-full-111-min.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="/assets/Talentinum2022/2022-05-19-fbm-talentinum_063.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="/assets/Talentinum2022/2022-05-19-fbm-talentinum_004.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="/assets/Talentinum2022/2022-05-19-fbm-talentinum_006 (1).jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="/assets/Talentinum2022/2022-05-19-fbm-talentinum_064.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="/assets/DzwiekamiNadziei2022/koncert_dzwiekami_nadziei_00189.jpg" onDragStart={handleDragStart} role="presentation" />,
  <img src="/assets/IuveSmetana-26.02.2023/POSI-smetana-full-214-min.jpg" onDragStart={handleDragStart} role="presentation" />,

];
    
const Gallery = () => {
  const [pictures, setPictures] = useState()

  useEffect(() => {
    setTimeout(() => {
      setPictures(items)
    }, 100);
  })

  const nextButton = <FontAwesomeIcon icon={faArrowRight} />;
  const prevButton = <FontAwesomeIcon icon={faArrowLeft} />;
  const renderNextButton = () => {
    return <div className="alice-carousel__next-btn">{nextButton}</div>
  };
  const renderPrevButton = () => {
    return <div className="alice-carousel__prev-btn">{prevButton}</div>
  };

  return <div id="gallery" >
          <AliceCarousel 
          mouseTracking 
          onInitialized
          disableDotsControls={true} 
          ssrSilentMode={true} 
          keyboardNavigation={true} 
          infinite={true} 
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
          responsive={responsive}
          items={pictures} />
    </div>
}
  

export default Gallery;