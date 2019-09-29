import React from 'react';
import axios from 'axios';
//import Gallery from './Gallery';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';

class DocumentaryPhotography extends React.Component {   
  constructor(props) {
    super(props);
    
    this.state = {
      photos: [],
      manilaDocumentaryURL : "/its-more-fun-in-manila"
    };   
  }
  componentDidMount() {    
    this.fetchDocumentaryPhotography(); 
  }

  componentWillUnmount() {}
  
  fetchDocumentaryPhotography = () => {        
    const location = this.props.location.pathname === this.state.manilaDocumentaryURL ? "manila" : "kolkata";

    axios({
      url: '/api/documentaryPhotography',
      method: 'POST',
      data: {
        location
      }
    })
    .then((response) => {
      const { photos } = response.data;
      this.setState({ photos: commonScript.adjustGalleryPhotos(commonScript.sortByRank(photos)) })
    })
    .catch(() => alert('Error fetching documentary photography'))
  }

  render() {         
    const { photos } = this.state;    
    const subtitle = "Documentary Photography";    
    const title = this.props.location.pathname === this.state.manilaDocumentaryURL ? "Manila, The Philippines" : "Kolkata, India"

      return (        
        <div>             
            <PageHeader title={title} subtitle={subtitle}></PageHeader>                   
            {photos.length > 0 &&
              <ImageGallery photos={photos}></ImageGallery>
              }                        
            {/* <Gallery category="documentary" location={location}></Gallery> */}
        </div>                 
      );
    }
  }

export default DocumentaryPhotography;