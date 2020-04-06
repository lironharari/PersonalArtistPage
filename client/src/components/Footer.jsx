import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
  
    render() {

      return (     
        <footer>                 
          <div className="home-bottom-social-icons">                                                                      
              <SocialIcon network="facebook" url="https://www.facebook.com/harariliron" target="_blank" title="my facebook" />
              <SocialIcon network="fivehundredpix" url="https://500px.com/liron_harari" target="_blank" title="my 500px" />
              <SocialIcon network="flickr" url="https://www.flickr.com/photos/sadhui/" target="_blank" title="my flickr" />
              <SocialIcon network="instagram" url="https://www.instagram.com/liron.harari/" target="_blank" title="my instagram" />
              <SocialIcon network="youtube" url="https://www.youtube.com/watch?v=zoFTK9Mo0JM&list=PLbd-yCGYHip0TDXxb4NmKelBUQJ-odshp&index=2&t=0s" target="_blank" title="my youtube" />
          </div>
          <div className="copyright">
               <a href="mailto:lironharari@gmail.com" >liron harari</a> &#169;
          </div>             
        </footer>
      );
    }
  }
  

export default Footer;