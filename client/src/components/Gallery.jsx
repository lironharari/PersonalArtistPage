import React from "react";
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import Img from 'react-image'
import Card from 'react-bootstrap/Card'
import LazyLoad from 'react-lazyload';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Skeleton from '@material-ui/lab/Skeleton';
import * as commonScript from '../script/common';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      photos: [],
      intervalIsSet: false,
      photoIndex: 0,
      isOpen: false,      
      images: [] ,
      rank:0,
      description:'',
      list:[],
      active: 'all'
    };   
    this.filter = this.filter.bind(this);   
  }
  
  componentDidMount() { 
    switch(this.props.category) {
      case "drawings":
        this.fetchDrawings(); 
        break;
      case "documentary":
        this.fetchDocumentaryPhotography(this.props.location); 
        break;
      case "street":
          this.fetchStreetPhotography(this.props.location); 
          break;        
      case "humanHistory":
          this.setState({ images: this.props.images });     
            break;                  
      default:
        // code block
    } 
  }

  componentWillUnmount() {
  }

 filter(e){          
        const location = e.target.dataset.location;         
        const type = e.target.dataset.type;
        const name = e.target.dataset.name;

        this.setState({ active: name })     

        if(type === "dogs")
          this.setState({ images: commonScript.sortByRank(this.state.photos.filter(function (photo) { return photo.keyWords.includes('dogs');})) });                  
        else if(type === "cats")
          this.setState({ images: commonScript.sortByRank(this.state.photos.filter(function (photo) { return photo.keyWords.includes('cats');})) });          
        else if(location === "")
          this.setState({ images: this.shuffle(this.state.photos) });
        else          
          this.setState({ images: commonScript.sortByRank(this.state.photos.filter((obj) =>(obj.location === location && obj.keyWords.length === 0 ))) });     
    } 
      
  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  fetchDrawings = () => {
    axios.get('/api/drawings')
      .then((response) => {
        const { drawings } = response.data;            
        this.setState({ images: commonScript.sortByRank(drawings) })
      })
      .catch(() => alert('Error fetching drawings'));
  }

  fetchStreetPhotography = () => {
    axios.get('/api/streetPhotography')
      .then((response) => {
        const { photos } = response.data;
        this.setState({ photos: photos })
      })
      .then(() => this.setState({ images: this.shuffle(this.state.photos) }))
      .catch(() => alert('Error fetching streetPhotography'));
  };  
  
  // update(id){
  //   const {description} = this.state;    

  //   axios.post('/api/updatePhoto', {
  //       id: id,
  //       update: { description: description },
  //     });      
  // }

//     deletePhoto(IdToDelete){
//       axios.delete('/api/deletePhoto', {
//         data: {
//           _id: IdToDelete,
//         },
//       });
//     }
    
  fetchDocumentaryPhotography = (location) => {
    axios({
      url: '/api/documentaryPhotography',
      method: 'POST',
      data: {
        location
      }
    })
    .then((response) => {
      const { photos } = response.data;
      this.setState({ images: commonScript.sortByRank(photos) })
    })
    .catch(() => alert('Error fetching documentary photography'))
  };

  renderImages(imagePath){
      let photoIndex = -1;
      const { images } = this.state;
      
      return images.map(obj => {
        photoIndex++;
        const privateKey = photoIndex;
          return (
              <MDBCol md="4" key={photoIndex} className="galleryCol">
                <figure>                    
                    <LazyLoad height={200}>
                        <Card className="photographyContainer">                                                               
                            <Img 
                              className="img-fluid"                                
                              alt="Gallery" 
                              src={imagePath + "thumbnails/" + obj.src}
                              onClick={ ()=> this.setState({ photoIndex: privateKey, isOpen: true }) }
                              loader={<Skeleton variant="rect" width="100%" height="100%" />}
                            />                             
                                  
                            {/* <input
                              type="text"
                              style={{ width: '200px' }}
                              onChange={(e) => this.setState({ rank: e.target.value })}
                              placeholder="rank"
                            />     
                            <input
                              type="text"
                              style={{ width: '200px' }}
                              onChange={(e) => this.setState({ description: e.target.value })}
                              placeholder="description"
                            />                                 
                            
                            <button
                              onClick={() =>
                                this.update(obj._id)
                              }
                            >
                              UPDATE
                            </button> */}

{/*                             

                              <input
                              type="text"
                              style={{ width: '200px' }}
                              onChange={(e) => this.setState({ rank: e.target.value })}
                              placeholder="rank"
                            />     
                            <button
                              onClick={() =>
                                this.update(obj._id)
                              }
                            >
                              UPDATE
                            </button>


  <button onClick={ ()=>  this.deletePhoto(obj._id)}>delete</button>

                            
                                                                                                                
                            <p style={{ color: 'red' }} >
                              {obj.keyWords}
                            </p>
                                                                                  */}
                                                                                  
                        </Card>             
                    </LazyLoad>                    
                </figure>
              </MDBCol>                      
          );
        })
}

render() {
      const { photoIndex, isOpen, images, active } = this.state;
      const imagePath = "/images/";        
  return (
    <div>
          <MDBContainer className="mt-5">
                {this.props.category === 'street' ? (
                <div className="streetFilter">               
                      <span>
                          FILTER BY:
                      </span>
                      <ButtonToolbar>                        
                        <Button variant="link" className={active === 'thailand' ? 'activeFilter' : ''} data-name="thailand" data-location="thailand" onClick={this.filter}>Thailand</Button>
                        <Button variant="link" className={active === 'india' ? 'activeFilter' : ''}  data-name="india" data-location="india" onClick={this.filter}>India</Button>                        
                        <Button variant="link" className={active === 'america' ? 'activeFilter' : ''}  data-name="america" data-location="america" onClick={this.filter}>Latin America</Button>
                        <Button variant="link" className={active === 'israel' ? 'activeFilter' : ''}  data-name="israel" data-location="israel" onClick={this.filter}>Israel</Button>
                        <Button variant="link" className={active === 'laos' ? 'activeFilter' : ''}  data-name="laos" data-location="laos" onClick={this.filter}>Laos</Button>
                        <Button variant="link" className={active === 'cats' ? 'activeFilter' : ''}  data-name="cats" data-type="cats" onClick={this.filter}>Cats</Button>
                        <Button variant="link" className={active === 'dogs' ? 'activeFilter' : ''}  data-name="dogs" data-type="dogs" onClick={this.filter}>Dogs</Button>
                        <Button variant="link"  data-location="" onClick={this.filter}>Show All</Button>
                      </ButtonToolbar>
                </div>
              ) : ('')}
            <div className="mdb-lightbox no-margin">                            
              <MDBRow>                      
                {this.renderImages(imagePath)}
              </MDBRow>
            </div>
            {isOpen && (
            <Lightbox
              mainSrc={ imagePath + images[photoIndex].src }
              nextSrc={ imagePath + images[(photoIndex + 1) % images.length].src }
              prevSrc={ imagePath + images[(photoIndex + images.length - 1) % images.length].src }
              imageTitle={photoIndex + 1 + "/" + images.length}
              imageCaption={images[photoIndex].description}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
                }
              />
            )}
          </MDBContainer>
      </div>
    );
  }
}

export default Gallery;