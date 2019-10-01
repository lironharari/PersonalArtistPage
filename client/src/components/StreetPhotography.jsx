import React from 'react';
import axios from 'axios';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class StreetPhotography extends React.Component {      
  constructor(props) {
    super(props);
    
    this.state = {
      photos: [],
      allPhotos: [],
      active: 'all'
    };   
    this.filter = this.filter.bind(this);   
  }
  componentDidMount() {        
    this.fetchStreetPhotography(); 
  }

  componentWillUnmount() {}
  

  filter(e){          
    const location = e.target.dataset.location;             
    const name = e.target.dataset.name;

    this.setState({ active: name })     
    
    if(location === "")
      this.setState({ photos: commonScript.adjustGalleryPhotos(commonScript.shuffle(this.state.allPhotos)) });
    else          
      this.setState({ photos: commonScript.adjustGalleryPhotos(commonScript.sortByRank(this.state.allPhotos.filter((obj) =>(obj.location === location && obj.keyWords.length === 0 )))) });     
}

  fetchStreetPhotography = () => {
    axios.get('/api/streetPhotography')
      .then((response) => {
        const { photos } = response.data;
        this.setState({ allPhotos: photos })
      })
      .then(() => this.setState({ photos: commonScript.adjustGalleryPhotos(commonScript.shuffle(this.state.allPhotos)) }))     
      .catch(() => alert('Error fetching streetPhotography'));
  };  
  
  render() {         
    const { photos, active } = this.state;

    return (        
      <div>                                   
          <PageHeader title="Street Photography" subtitle="various" icon={<CameraRollIcon className="icon"></CameraRollIcon>}></PageHeader>                              
          <div className="streetFilter">               
                <span>
                    FILTER BY:
                </span>
                <ButtonToolbar>                        
                  <Button variant="link" className={active === 'thailand' ? 'activeFilter' : ''} data-name="thailand" data-location="thailand" onClick={this.filter}>Thailand</Button>
                  <Button variant="link" className={active === 'india' ? 'activeFilter' : ''}  data-name="india" data-location="india" onClick={this.filter}>India</Button>                        
                  <Button variant="link" className={active === 'america' ? 'activeFilter' : ''}  data-name="america" data-location="america" onClick={this.filter}>Latin America</Button>
                  <Button variant="link" className={active === 'israel' ? 'activeFilter' : ''}  data-name="israel" data-location="israel" onClick={this.filter}>Israel</Button>                  
                  <Button variant="link"  data-location="" onClick={this.filter}>Show All</Button>
                </ButtonToolbar>
          </div>            
            <ImageGallery photos={photos}></ImageGallery>
      </div>                 
    );
  }
}
  
export default StreetPhotography;