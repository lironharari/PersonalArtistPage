import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from 'react-image-lightbox';

export default function ImageGallery({ photos }) {
    const [photoIndex,setPhotoIndex] = useState(0);
    const [isOpen,setIsOpen] = useState(false);    

    const imageRenderer = ({
      key,
      index,
      photo,     
    }) => {
      
      const handleOnClick = e => {
        setIsOpen(true);
        setPhotoIndex(index);
      };  

      return (
        <div 
            key={key} >  
                  <img                    
                    alt={photo.title}
                    className="galleryImage"
                    {...photo}
                    onClick={handleOnClick}
                  />                            
        </div>
      );
    };
        
  return (
    <div className="galleryContainer">          
      <Gallery 
                renderImage={imageRenderer}
                photos={photos}            
                                />                                         
            
            {isOpen && (
          <Lightbox            
            imageCaption={photos[photoIndex].caption}            
            mainSrc={photos[photoIndex].src}            
            nextSrc={photos[(photoIndex + 1) % photos.length].src}            
            prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].src}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + photos.length - 1) % photos.length)              
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % photos.length)                            
            }
          />
        )}
  </div>
  );
} 