import React from 'react';
import axios from 'axios';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';

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
        <div>
            <PageHeader title="Street Photography" subtitle="poverty"></PageHeader>            
            <ImageGallery photos={photos}></ImageGallery>
        </div>        
        );
    }
  }

export default Poverty;