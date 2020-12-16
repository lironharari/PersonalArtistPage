import React from 'react';
import axios from 'axios';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';
import { CircularProgress } from '@material-ui/core';
//import {Helmet} from "react-helmet";
const { isEmpty } = require('lodash');				

class ItsMoreFunInManila extends React.Component {   
  constructor(props) {
    super(props);
    
    this.state = {
      photos: []
    };   
  }
  componentDidMount() {    
    this.fetchDocumentaryPhotography(); 
  }

  componentWillUnmount() {}
  
  fetchDocumentaryPhotography = () => {        
    axios({
      url: '/api/documentaryPhotography',
      method: 'POST',
      data: {location:"manila"}
    })
    .then((response) => {
      const { photos } = response.data;
      this.setState({ photos: commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos)) })
    })
    .catch(() => alert('Error fetching documentary photography'))
  }

  render() {         
    const { photos } = this.state;        
      return (        
        <div className="pageContainer"> 
            {/* <Helmet>            
                <meta name="title" content="Liron Harari - Documentary Photography"/>
                <meta name="description" content="Documentary Photography - Manila, The Philippines"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://lironharari.herokuapp.com/its-more-fun-in-manila"/>
                <meta property="og:title" content="Liron Harari - Documentary Photography"/>
                <meta property="og:description" content="Documentary Photography - Manila, The Philippines"/>
                <meta property="og:image" content="https://lironharari.herokuapp.com/images/_DSC4509.jpg"/>
                <meta property="og:image:alt" content="Documentary Photography - Manila, The Philippines"/>  
            </Helmet>                                           */}
            <PageHeader title="It's more fun in Manila" subtitle="Manila, The Philippines"></PageHeader>                               
            {!isEmpty(photos) ? <ImageGallery photos={photos}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
        </div>                 
      );
    }
  }

export default ItsMoreFunInManila;