import React from 'react';
import axios from 'axios';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';

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
  console.log(photos);
      return (
        <div className="pageContainer">                                   
            <PageHeader title="Street Photography" subtitle="animals"></PageHeader>            
            <ImageGallery photos={photos}></ImageGallery>           
        </div>        
        );
    }
  }

export default Animals;