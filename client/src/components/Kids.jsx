import React from 'react';
import axios from 'axios';
import PageHeader from './PageHeader';
import ImageGallery from './ImageGallery';
import * as commonScript from '../script/common';


class Kids extends React.Component {      
  constructor(props) {
    super(props);        
    this.state = {
        photos: []
    };   
  }
  componentDidMount() {    
      this.fetchKids(); 
  }

  fetchKids = () => {
    axios.get('/api/kids')
      .then((response) => {
        const { kids } = response.data;
        this.setState({ photos: commonScript.adjustGalleryPhotos(kids) })        
      })     
      .catch(() => alert('Error fetching kids'));
  };  

//   updatePhoto = ( id, update ) => {
//     axios({
//       url: '/api/updatePhoto',
//       method: 'POST', 
//       data: {
//         id,
//         update : update          
//       }
//     })
//     .then((response) => {        
//       console.log(response.data);        
//     })
//     .catch((error) => console.log(error))      
//   }


  componentWillUnmount() {}

      render() {    
        const { photos } = this.state;      
      return (
        <div>
            <PageHeader title="Photography" subtitle="kids"></PageHeader>            
            <ImageGallery photos={photos}></ImageGallery>                   
        </div>        
        );
    }
  }

export default Kids;