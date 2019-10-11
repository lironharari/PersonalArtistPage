import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from 'react-images';

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
            <ModalGateway>
            {isOpen ? (
              <Modal 
                  onClose={() => setIsOpen(false)}
                  allowFullscreen={false}
                  >
                <Carousel 
                        views={photos}
                        currentIndex={photoIndex}
                        hideControlsWhenIdle={false}
                         />
              </Modal>
            ) : null}
          </ModalGateway>                                
  </div>
  );
}