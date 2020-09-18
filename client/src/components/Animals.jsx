import React from 'react';
import axios from 'axios';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';
import { CircularProgress } from '@material-ui/core';
const { isEmpty } = require('lodash');				

class Animals extends React.Component {      
  constructor(props) {
    super(props);        
    this.state = {
        photos: []
    };   
  }
  componentDidMount() {    
      this.fetchAnimals(); 
  }

  fetchAnimals = () => {
    axios.get('/api/animals')
      .then((response) => {
        const { animals } = response.data;
        this.setState({ photos: commonScript.adjustGalleryPhotos(commonScript.sortByRank(animals)) })        
      })     
      .catch(() => alert('Error fetching Animals'));
  };  

  componentWillUnmount() {}

      render() {    
        const { photos } = this.state;      
        
      return (
        <div className="pageContainer">                                   
            <PageHeader title="Street Photography" subtitle="Animals"></PageHeader>                              
            {!isEmpty(photos) ? <ImageGallery photos={photos}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}
        </div>        
        );
    }
  }

export default Animals;