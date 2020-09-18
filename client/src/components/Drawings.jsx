import React from 'react';
import axios from 'axios';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';
import { CircularProgress } from '@material-ui/core';
const { isEmpty } = require('lodash');				

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
            <PageHeader title="Drawings" subtitle="Various"></PageHeader>            
            {!isEmpty(drawings) ? <ImageGallery photos={drawings}></ImageGallery> : <div className="spinner"><CircularProgress /></div>}                                  
        </div>        
        );
    }
  }

export default Drawings;