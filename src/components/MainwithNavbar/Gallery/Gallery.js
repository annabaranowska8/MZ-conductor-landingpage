import React from "react";
import Carousel from 'react-multi-carousel';
import { Image } from "semantic-ui-react";
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const images = [
    "/assets/IMG_9694.jpg",
    "/assets/DSC_4202ak.jpg",
    "/assets/IMG_9692.jpg",
    "/assets/DSC_4208mk.jpg"
];


const Gallery = ({ deviceType }) => {
    return (
      <Carousel
        ssr
        partialVisbile
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
      >
        {images.slice(0, 3).map(image => {
          return (
            <Image
              draggable={false}
              style={{ width: "100%", height: "100%" }}
              src={image}
            />
          );
        }
        )}
      </Carousel>
    );
  };

// const Gallery = (responsive={responsive}) => {
//     return (
//         <div className="gallery" id="gallery">
//             <div className="gallery__photo">
//                 <div className="gallery--1">
//                     <div className="photo1"></div>
//                     <div className="photo2"></div>                    
//                 </div>
//                 <div className="gallery--2">
//                     <div className="photo3"></div>
//                     <div className="photo4"></div>                    
//                 </div>
//                 {/* <div className="photo5"></div> */}
//             </div>
//         </div>
//     )
// }

export default Gallery;