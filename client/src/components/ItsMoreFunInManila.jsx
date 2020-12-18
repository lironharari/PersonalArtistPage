import React from 'react';
import axios from 'axios';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';
import { CircularProgress } from '@material-ui/core';

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
            <PageHeader title="It's more fun in Manila" subtitle="Manila, The Philippines"></PageHeader>                               
            {!isEmpty(photos) ? <ImageGallery photos={photos}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
        </div>                 
      );
    }
  }

export default ItsMoreFunInManila;