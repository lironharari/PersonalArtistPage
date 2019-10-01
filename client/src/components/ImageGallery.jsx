import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

export default function ImageGallery({ photos }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    
    // const openLightbox = useCallback((event, { photo, index }) => {
    //   setCurrentImage(index);
    //   setViewerIsOpen(true);
    // }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };      

    const imageRenderer = ({
      key,
      index,
      photo,     
    }) => {
      const handleOnClick = e => {
        setCurrentImage(index);
        setViewerIsOpen(true);
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
    <div>    
      
      <Gallery 
                renderImage={imageRenderer}
                photos={photos}            
                                />
        <ModalGateway>
        {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
            <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.description
                }))}
            />
            </Modal>
        ) : null}
        </ModalGateway>
  </div>
  );
}