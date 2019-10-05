import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Parser from 'html-react-parser';
import * as commonScript from '../script/common';
import ImageGallery from './ImageGallery';

class Documentary extends React.Component {      
    constructor(props) {
        super(props);
        
        this.state = {
          episodes: [],
          photos: []
        };   
      }
      componentDidMount() {    
          this.fetchDocumentaries();           
          this.fetchEpisodePhotos();           
      }

      componentWillUnmount() {}    

      styleGalleryPhotos(photos) {
        return commonScript.adjustGalleryPhotos(photos);
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

        if(photos.length>0)
        {          
          episode1 = photos.filter(function (photo) { return photo.subcategory === "episode1";});          
          episode2 = photos.filter(function (photo) { return photo.subcategory === "episode2";});          
          episode3 = photos.filter(function (photo) { return photo.subcategory === "episode3";});                    
        }

      return (
        <div className="documentaryGrid">                  
                  <Row className="documentaryHeadContainer">                
                      <Col>
                            <h1>Human History Revisited</h1>
                            <h4>Crash curse in Intervention Theory</h4>                                                  
                      </Col>                                    
                  </Row>                  
                  <Row className="documentaryHeadContainer">
                      <Col className="documentaryHeader">
                            <p>
                                    Did life on Earth evolve over millions of years, or was it created in the blink of an eye by God?
                                    That's the question at the core of the creation evolution debate.
                            </p>
                            <p>
                                    It is an ongoing, cultural, political, and theological dispute about the origins of the Earth, humanity, and life.      
                            </p>
                            <p>
                                    Intervention theory puts an end to the dispute by harmonizing apparently two conflicting points of view. 
                            </p>                
                            <p>
                                    Intervention theory embraces both creationism and biological evolution by adding critical information from a variety of fields such as archeology, anthropology, astronomy, religion and biology, to name but a few.                                     
                            </p>          
                            <p>
                                So what is intervention theory? to put it briefly, It is the theory that Aliens “intervened” in the development of Life on Earth.                          
                            </p>
                      </Col>                  
                  </Row>                  

                {
                episodes.map(obj => (
                    <div key={obj._id}>
                            <Row>
                                <Col>
                                    <hr/>
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
                                    <object title={obj.title} data={obj.src} >
                                        <span>could not diplay YouTube video</span>
                                    </object>                                    
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="humanHistoryThumbs">
                                    {(obj.rank === 10) ? <ImageGallery photos={this.styleGalleryPhotos(episode1)}></ImageGallery>:''}           
                                    {(obj.rank === 9) ? <ImageGallery photos={this.styleGalleryPhotos(episode2)}></ImageGallery>:''}           
                                    {(obj.rank === 8) ? <ImageGallery photos={this.styleGalleryPhotos(episode3)}></ImageGallery>:''}                                                           
                                    </div>                         
                                </Col>                      
                            </Row>
                    </div>
                ))                  
              }            
          </div>          
        );
    }
  }

export default Documentary;