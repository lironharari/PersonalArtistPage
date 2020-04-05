import React, { Component } from 'react';
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Gallery from "react-photo-gallery";

class Home extends Component {
  
    render() {
      
      const photos = [
        {
          src: "/images/thumbnails/Scan_20191117_155915-Scan_20191117_160138.jpg",
          width: 800,
          height: 574,
          title:"Joe Shmoe Drawing Jane",
          href:"drawings"
        },
        {
          src: "/images/thumbnails/paracas-skulls.jpg",
          width: 640,
          height: 850,
          title:"Elongated Skulls",
          href:"human-history-revisited"          
        },            
        {
          src: "/images/thumbnails/DSC02957c.jpg",
          width: 884,
          height: 589,
          title:"Street Photography",
          href:"street-photography"
        },
        {
          src: "/images/thumbnails/humanape.jpg",
          width: 462,
          height: 545,
          title:"Human vs Ape",
          href:"human-history-revisited"
        },                                                    
        {
          src: "/images/thumbnails/DSC07512SMALL.jpg",
          width: 640,
          height: 427,
          title:"Life on the Railroads",
          href:"life-on-the-railroads"          
        },
        {
          src: "/images/thumbnails/ep4-plasma-lamp.jpg",
          width: 528,
          height: 426,
          title:"The Tree of Life",
          href:"human-history-revisited"
        },        
        {
          src: "/images/thumbnails/DSC_0027bbwerwer__a.jpg",
          width: 389,
          height: 581,
          title:"Street Photography - Kids",
          href:"kids"
        },
        {
          src: "/images/thumbnails/_DSC3766.jpg",
          width: 800,
          height: 600,
          title:"Joe Shmoe",
          href:"drawings"
        },                
        {
          src: "/images/thumbnails/_DSC7685BIG.jpg",
          width: 900,
          height: 600,
          title:"It's more fun in Manila!",
          href:"its-more-fun-in-manila"
        },                
        {
          src: "/images/video/home-the-goddess-of-hope.jpg",
          width: 679,
          height: 800,
          title:"The Goddess of Hope",
          href:"music"
        }        
      ];
      
      const imageRenderer = ({
        key,
        photo,     
      }) => {
        
        const handleOnClick = e => {
          window.location.href = e.target.getAttribute('data-href');
        };  
  
        return (
          <div 
              key={key} >  
                    <img                    
                      alt={photo.title}
                      data-href={photo.href}
                      className="galleryImage"
                      {...photo}
                      onClick={handleOnClick}
                    />                            
          </div>
        );
      };

      return (     
        <div className="homeGrid">
            <Gallery photos={photos} renderImage={imageRenderer}></Gallery>                      
        </div>
      );
    }
  }
  

export default Home;