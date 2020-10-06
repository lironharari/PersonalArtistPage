import React from 'react';
import axios from 'axios';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';
import { CircularProgress } from '@material-ui/core';
const { isEmpty } = require('lodash');				

class Poverty extends React.Component {      
  constructor(props) {
    super(props);        
    this.state = {
        photos: []
    };   
  }
  componentDidMount() {    
      this.fetchPoverty(); 
  }

  fetchPoverty = () => {
    axios.get('/api/poverty')
      .then((response) => {
        const { poverty } = response.data;
        this.setState({ photos: commonScript.adjustGalleryPhotos(poverty) })        
      })     
      .catch(() => alert('Error fetching poverty'));
  };  

  componentWillUnmount() {}

      render() {    
        const { photos } = this.state;      
      return (
        <div className="pageContainer">
            <PageHeader title="Street Photography" subtitle="Poverty"></PageHeader>            
            {!isEmpty(photos) ? <ImageGallery photos={photos}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}                                  
        </div>        
        );
    }
  }

export default Poverty;