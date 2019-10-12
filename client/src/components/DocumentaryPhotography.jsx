import React from 'react';
import axios from 'axios';
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
    const title = this.props.location.pathname === this.state.manilaDocumentaryURL ? "It's more fun in Manila!" : "Life on the Railroads"

      return (        
        <div className="pageContainer">                                   
            <PageHeader title={title} subtitle={subtitle}></PageHeader>                   
              <ImageGallery photos={photos}></ImageGallery>
        </div>                 
      );
    }
  }

export default DocumentaryPhotography;