import React from 'react';
import axios from 'axios';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { CircularProgress } from '@material-ui/core';

var _ = require('lodash');

class StreetPhotography extends React.Component {      
  constructor(props) {
    super(props);
    
    this.state = {
      photos: [],
      allPhotos: [],
      active: 'various'
    };   
    this.filter = this.filter.bind(this);   
  }
  componentDidMount() {        
    this.fetchStreetPhotography(); 
  }

  componentWillUnmount() {}
  

  filter(e){              
    const location = e.target.dataset.location;

    this.setState({ active: location })     
    
    if(location === "various")
      this.setState({ photos: commonScript.adjustGalleryPhotos(commonScript.sortByRank(this.state.allPhotos)) });
    else          
      this.setState({ photos: commonScript.adjustGalleryPhotos(commonScript.sortByRank(this.state.allPhotos.filter((obj) =>(obj.location === location )))) });     
}

  fetchStreetPhotography = () => {
    axios.get('/api/streetPhotography')
      .then((response) => {
        const { photos } = response.data;
        this.setState({ allPhotos: photos })
      })
      .then(() => this.setState({ photos: commonScript.adjustGalleryPhotos(commonScript.sortByRank(this.state.allPhotos)) }))     
      .catch(() => alert('Error fetching streetPhotography'));
  };  
  
  render() {         
    const { photos, active } = this.state;

    return (        
      <div className="pageContainer">                                   
          <PageHeader title="Street Photography" subtitle={_.capitalize(active)}></PageHeader>                              
          {!_.isEmpty(photos) ? (
              <>
              <DropdownButton className="filter" id="dropdown-item-button" title="filter by location:">
                <Dropdown.Item as="button" className={active === 'thailand' ? 'activeFilter' : ''}  data-location="thailand" onClick={this.filter}>thailand</Dropdown.Item>                  
                <Dropdown.Item as="button" className={active === 'india' ? 'activeFilter' : ''}   data-location="india" onClick={this.filter}>india</Dropdown.Item>                  
                <Dropdown.Item as="button" className={active === 'america' ? 'activeFilter' : ''}   data-location="america" onClick={this.filter}>america</Dropdown.Item>            
                <Dropdown.Item as="button" className={active === 'israel' ? 'activeFilter' : ''}  data-location="israel" onClick={this.filter}>israel</Dropdown.Item>            
                <Dropdown.Divider />
                <Dropdown.Item as="button" className={active === 'various' ? 'activeFilter' : ''} data-location="various" onClick={this.filter}>show all</Dropdown.Item>            
              </DropdownButton>            
              <ImageGallery photos={photos}></ImageGallery>
              </>
              ) : <div className="spinner"><CircularProgress /></div>}


      </div>                 
    );
  }
}
  
export default StreetPhotography;