import React from 'react';
import axios from 'axios';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';

class LifeOnTheRailrods extends React.Component {   
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
      data: {location:"kolkata"}
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
            <PageHeader title="Life on the Railroads" subtitle="Documentary Photography"></PageHeader>                   
              <ImageGallery photos={photos}></ImageGallery>
        </div>                 
      );
    }
  }

export default LifeOnTheRailrods;