import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
// import { SocialIcon } from 'react-social-icons';
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

class Home extends Component {
  
    render() {
      
      const photos = [
        // {
        //   src: "/images/thumbnails/Scan_20191117_155915-Scan_20191117_160138.jpg",
        //   width: 800,
        //   height: 574,
        //   title:"Joe Shmoe Drawing Jane",
        //   href:"drawings"
        // },
        {
          src: "/images/thumbnails/_DSC3766.jpg",
          width: 800,
          height: 600,
          title:"The Life and Death of Joe Shmoe",
          href:"drawings"
        },                        
        {
          src: "/images/thumbnails/DSC_0027bbwerwer__a.jpg",
          width: 389,
          height: 581,
          title:"Street Photography - Kids",
          href:"kids"          
        },            
        {
          src: "/images/thumbnails/DSC02957c.jpg",
          width: 884,
          height: 589,
          title:"Street Photography - Candid and Unposed",
          href:"street-photography"
        },
        {
          src: "/images/video/home-the-goddess-of-hope.jpg",
          width: 679,
          height: 800,
          title:"The Goddess of Hope - Original Music",
          href:"music"          
        },           
        // {
        //   src: "/images/thumbnails/humanape.jpg",
        //   width: 462,
        //   height: 545,
        //   title:"Human vs Ape",
        //   href:"human-history-revisited"
        // },                                                    
        {
          src: "/images/thumbnails/DSC07512SMALL.jpg",
          width: 640,
          height: 427,
          title:"Life on the Railroads - Photography Documerntary",
          href:"life-on-the-railroads"          
        },
        // {
        //   src: "/images/thumbnails/ep4-plasma-lamp.jpg",
        //   width: 528,
        //   height: 426,
        //   title:"The Tree of Life",
        //   href:"human-history-revisited"
        // },        
        // {
        //   src: "/images/thumbnails/_DSC7685BIG.jpg",
        //   width: 900,
        //   height: 600,
        //   title:"It's more fun in Manila!",
        //   href:"its-more-fun-in-manila"
        // },                     
        {
          src: "/images/thumbnails/paracas-skulls.jpg",
          width: 640,
          height: 850,
          title:"Human History Revisited - YouTube Series",
          href:"human-history-revisited"          
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
            {/* <hr />
             <Row>
              <Col sm>
                  <div className="home-bottom-text">
                    <h4>text</h4>
                    <h6>text</h6>
                  </div>                                                     
              </Col>
              <Col sm>         
                  <div className="home-bottom-social-icons">                                                                      
                      <SocialIcon network="facebook" url="https://www.facebook.com/harariliron" target="_blank" />
                      <SocialIcon network="fivehundredpix" url="https://500px.com/liron_harari" target="_blank" />
                      <SocialIcon network="flickr" url="https://www.flickr.com/photos/sadhui/" target="_blank" />
                      <SocialIcon network="instagram" url="https://www.instagram.com/liron.harari/" target="_blank" />
                      <SocialIcon network="youtube" url="https://www.youtube.com/watch?v=zoFTK9Mo0JM&list=PLbd-yCGYHip0TDXxb4NmKelBUQJ-odshp&index=2&t=0s" target="_blank" />                                                                                                                  
                  </div>
              </Col>
            </Row>                                  */}
        </div>
      );
    }
  }
  

export default Home;