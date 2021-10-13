import React from "react";

const Gallery = () => {
    return (
        <div className="gallery" id="gallery">
            <div className="gallery__photo">
                <div className="gallery--1">
                    <div className="photo1"></div>
                    <div className="photo2"></div>                    
                </div>
                <div className="gallery--2">
                    <div className="photo3"></div>
                    <div className="photo4"></div>                    
                </div>
                {/* <div className="photo5"></div> */}
            </div>
        </div>
    )
}

export default Gallery;