import React, { Component } from 'react';
import Gallery from "react-photo-gallery";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import photos from './data/home.json'
import { CircularProgress } from '@material-ui/core';
import {Helmet} from "react-helmet";

const { isEmpty } = require('lodash');				

class Home extends Component {  
    render() {          
      const imageRenderer = ({ key, photo }) => {
        return (
          <a href={photo.href} key={key}>
                <LazyLoadImage                    
                  alt={photo.title}
                  key={key}                  
                  className="galleryImage"
                  {...photo}
                />                            
          </a>
        );
      };

      return (     
        <div className="homeGrid">
            <Helmet>
              <meta name="Description" content="photography, documentary, drawings, and music." />
              <title>liron harari</title>
              <meta property="og:title" content="Liron Harari" />
              <meta property="og:description" content="photography, documentary, drawings, and music." />
              <meta property="og:image" content="https://lironharari.herokuapp.com/images/DSC02957c.jpg" />
              <meta property="og:url" content="https://lironharari.herokuapp.com/" />              
              <meta property="og:site_name" content="Liron Harari" />                            
            </Helmet>
            {!isEmpty(photos) ? <Gallery photos={photos} renderImage={imageRenderer}></Gallery> : <div className="spinner"><CircularProgress /></div>}                                  
        </div>
      );
    }
  }
  

export default Home;