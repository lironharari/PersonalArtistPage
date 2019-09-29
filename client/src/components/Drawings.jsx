import React from 'react';
import axios from 'axios';
//import Gallery from './Gallery';
import PageHeader from './PageHeader';
import BrushIcon from '@material-ui/icons/Brush';
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
        <div>
            <PageHeader title="Drawings" subtitle="various" icon={<BrushIcon className="icon"></BrushIcon>}></PageHeader>            

            {drawings.length > 0 &&
              <ImageGallery photos={drawings}></ImageGallery>
            }            

            {/* <Gallery category="drawings"></Gallery> */}
        </div>        
        );
    }
  }

export default Drawings;