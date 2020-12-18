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
              <meta charset="utf-8" />
              <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />    
              <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>     
              <title>Liron Harari</title>     
              <meta name="title" content="Liron Harari"/>
              <meta name="description" content="Photography, YouTube documentary, Drawings, and Music."/>
              <meta property="og:type" content="website"/>
              <meta property="og:url" content="https://lironharari.herokuapp.com/"/>
              <meta property="og:title" content="Liron Harari"/>
              <meta property="og:description" content="Photography, YouTube Series, Drawings, and Music."/>
              <meta property="og:image" content="https://lironharari.herokuapp.com/images/PersonalArtistPage-Home.jpg"/>
              <meta property="og:image:alt" content="Street Photography - Mexico"/>      
              <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> 
            </Helmet>
            {!isEmpty(photos) ? <Gallery photos={photos} renderImage={imageRenderer}></Gallery> : <div className="spinner"><CircularProgress /></div>}                                  
        </div>
      );
    }
  }
  

export default Home;