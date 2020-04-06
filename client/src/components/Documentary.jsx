import React from 'react'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Parser from 'html-react-parser'
import * as commonScript from '../script/common'
import ImageGallery from './ImageGallery'
import ModalVideo from 'react-modal-video'

class Documentary extends React.Component {      
    constructor(props) {
        super(props);
        
        this.state = {
          episodes: [],
          photos: [],
          isOpen: false,
          videoId:""
        };   
        this.openModal = this.openModal.bind(this)
      }
      componentDidMount() {    
          this.fetchDocumentaries();           
          this.fetchEpisodePhotos();           
      }

      componentWillUnmount() {}    

      styleGalleryPhotos(photos) {
        return commonScript.adjustGalleryPhotos(photos);
      }

      openModal (e) {
        const video = e.target.dataset.video;                 

        this.setState({videoId: video});
        this.setState({isOpen: true});
      }

      fetchEpisodePhotos = () => {
            axios.get('/api/episodePhotos')
              .then((response) => {
                const { photos } = response.data;
                this.setState({ photos: photos })
              })
              .catch(() => alert('Error fetching documentaries photos'));
          }           
      fetchDocumentaries = () => {
        axios.get('/api/documentaries')
          .then((response) => {
            const { documentaries } = response.data;
            this.setState({ episodes: commonScript.sortByRank(documentaries) })
          })
          .catch(() => alert('Error fetching episodes'));
      }   

      render() {   
        const { episodes, photos } = this.state;              
        let episode1 = [];
        let episode2 = [];
        let episode3 = [];        
        let episode4 = [];        
        let episode5 = [];        
        let episode6 = [];        
        let episode7 = [];        
        let episode8 = [];        
        let episode9 = [];        

        if(photos.length>0)
        {          
          episode1 = photos.filter(function (photo) { return photo.subcategory === "episode1";});          
          episode2 = photos.filter(function (photo) { return photo.subcategory === "episode2";});          
          episode3 = photos.filter(function (photo) { return photo.subcategory === "episode3";});                    
          episode4 = photos.filter(function (photo) { return photo.subcategory === "episode4";});                    
          episode5 = photos.filter(function (photo) { return photo.subcategory === "episode5";});                    
          episode6 = photos.filter(function (photo) { return photo.subcategory === "episode6";});                    
          episode7 = photos.filter(function (photo) { return photo.subcategory === "episode7";});                    
          episode8 = photos.filter(function (photo) { return photo.subcategory === "episode8";});                    
          episode9 = photos.filter(function (photo) { return photo.subcategory === "episode9";});                    
        }

      return (
        <div className="documentaryGrid">                                              
                  <Row className="documentaryHeadContainer">                
                      <Col>
                            <h1>Human History Revisited</h1>
                            <h4>Crash Curse in Intervention Theory</h4>                                                  
                      </Col>                                    
                  </Row>                  
                  <Row className="documentaryHeadContainer">
                      <Col className="documentaryHeader">
                            <p>
                                    Did life on Earth evolve over millions of years, or was it created in the blink of an eye by god?
                                    That's the question at the core of the creation evolution debate. 
                                    It is an ongoing, cultural, political, and theological dispute about the origins of the Earth, humanity, and life.
                            </p>
                            <p>
                                    Intervention theory puts an end to the dispute by harmonizing apparently two conflicting points of view. 
                                    Intervention theory embraces both creationism and biological evolution by adding critical information from a variety of fields such as archeology, anthropology, astronomy, religion and biology, to name but a few.
                            </p>                
                            <p>
                                So what is intervention theory? to put it briefly, It is the theory that aliens “intervened” in the development of life on earth.                          
                            </p>
                      </Col>                  
                  </Row>                  

                {
                episodes.map(obj => (
                    <div key={obj._id}>
                            <Row>
                                <Col>
                                    <hr id={commonScript.inPageLink(obj.title)}/>
                                </Col>                  
                            </Row>
                            <Row className="documentaryRow">
                              <Col>                                                                  
                                  <h3>{obj.title}</h3>
                                  <h2>{obj.subtitle}</h2>                  
                                  <div className="description">
                                      {Parser(obj.description)}
                                  </div>              
                                </Col>
                                <Col className="documentaryCol">                                    
                                  <div className="videoContainer" >
                                      <img  src={obj.videoThumbnail}
                                            className="videoThumbnail"
                                            alt={obj.title}                                               
                                            data-video={obj.src}
                                            onClick={this.openModal} />
                                  </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="humanHistoryThumbs">
                                    {(obj.rank === 10) ? <ImageGallery photos={this.styleGalleryPhotos(episode1)}></ImageGallery>:''}           
                                    {(obj.rank === 9) ? <ImageGallery photos={this.styleGalleryPhotos(episode2)}></ImageGallery>:''}           
                                    {(obj.rank === 8) ? <ImageGallery photos={this.styleGalleryPhotos(episode3)}></ImageGallery>:''}                                                           
                                    {(obj.rank === 7) ? <ImageGallery photos={this.styleGalleryPhotos(episode4)}></ImageGallery>:''}                                                           
                                    {(obj.rank === 6) ? <ImageGallery photos={this.styleGalleryPhotos(episode5)}></ImageGallery>:''}                                                           
                                    {(obj.rank === 5) ? <ImageGallery photos={this.styleGalleryPhotos(episode6)}></ImageGallery>:''}                                                           
                                    {(obj.rank === 4) ? <ImageGallery photos={this.styleGalleryPhotos(episode7)}></ImageGallery>:''}                                                           
                                    {(obj.rank === 3) ? <ImageGallery photos={this.styleGalleryPhotos(episode8)}></ImageGallery>:''}                                                           
                                    {(obj.rank === 2) ? <ImageGallery photos={this.styleGalleryPhotos(episode9)}></ImageGallery>:''}                                                           
                                    </div>                         
                                </Col>                      
                            </Row>
                    </div>
                ))                  
              }            
              <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId={this.state.videoId} 
                        onClose={() => this.setState({isOpen: false})} 
                        />
          </div>          
        );
    }
  }

export default Documentary;