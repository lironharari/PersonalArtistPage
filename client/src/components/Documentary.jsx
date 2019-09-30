import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Gallery from './Gallery';
import Parser from 'html-react-parser';
import * as commonScript from '../script/common';
import ImageGallery from './ImageGallery';

class Documentary extends React.Component {      
    constructor(props) {
        super(props);
        
        this.state = {
          episodes: []
        };   
      }
      componentDidMount() {    
          this.fetchDocumentaries();           
      }

      componentWillUnmount() {}
      
      updateDocumentaries(episodes) {
        // if(episodes.length>0)
        // {
        //     //console.log(episodes);
        //     const found = episodes.find(function(element) {
        //         return element._id === '5d7de2254cb26a1a9c53d245';
        //       });
              
        //        const photos = found.photos;
        //        //console.log(photos);

        //       //photos.push({src:'sumer-laws.jpg',description:'sumer laws',height:350,width:350});
              
        //        //console.log(photos);                            
        // //       //this.updateDocumentary('5d7de2254cb26a1a9c53d244',{photos:photos});    
        //  }        
      }

      styleGalleryPhotos(photos) {
        return commonScript.adjustGalleryPhotos(photos);
      }
          
      fetchDocumentaries = () => {
        axios.get('/api/documentaries')
          .then((response) => {
            const { documentaries } = response.data;
            this.setState({ episodes: commonScript.sortByRank(documentaries) })
          })
          .catch(() => alert('Error fetching documentaries'));
      }
    
    updateDocumentary = ( id, update ) => {
        axios({
          url: '/api/updateDocumentary',
          method: 'POST', 
          data: {
            id,
            update : update          
          }
        })
        .then((response) => {        
          console.log(response.data);        
        })
        .catch((error) => console.log(error))      
      }

      render() {   
        const { episodes } = this.state;              
        
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
                                    <div>
                                        {Parser(obj.description)}
                                    </div>                                                                                                                                          
                                </Col>
                                <Col>
                                    <object title={obj.title} data={obj.src} >
                                        <span>could not diplay YouTube video</span>
                                    </object>                                    
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="humanHistoryThumbs">
                                        {/* <Gallery category="humanHistory" images={obj.photos}></Gallery> */}
                                        {obj.photos.length > 0 &&
                                        <ImageGallery photos={this.styleGalleryPhotos(obj.photos)}></ImageGallery>
                                        }        
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