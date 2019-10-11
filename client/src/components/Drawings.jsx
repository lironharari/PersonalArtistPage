import React from 'react';
import axios from 'axios';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';

class Drawings extends React.Component {      
  constructor(props) {
    super(props);        
    this.state = {
      drawings: []
    };   
  }
  componentDidMount() {    
      this.fetchDrawings(); 
  }

  componentWillUnmount() {}

  fetchDrawings = () => {
    axios.get('/api/drawings')
      .then((response) => {
        const { drawings } = response.data;            
        this.setState({ drawings: commonScript.adjustGalleryPhotos(commonScript.sortByRank(drawings)) })
      })
      .catch(() => alert('Error fetching drawings'));
  }     

      render() {    
        const { drawings } = this.state; 
        
      return (
        <div className="pageContainer">                                   
            <PageHeader title="Drawings" subtitle="various"></PageHeader>            
            <ImageGallery photos={drawings}></ImageGallery>                      
        </div>        
        );
    }
  }

export default Drawings;