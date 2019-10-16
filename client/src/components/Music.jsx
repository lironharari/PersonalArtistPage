import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeadsetIcon from '@material-ui/icons/Headset';
import PageHeader from './PageHeader';
import Parser from 'html-react-parser';
import * as commonScript from '../script/common';
import ModalVideo from 'react-modal-video'

class Music extends React.Component {      
    constructor(props) {
        super(props);        
        this.state = {
          songs: [],
          isOpen: false,
          videoId:""          
        };   
        this.openModal = this.openModal.bind(this)
      }
      componentDidMount() {    
          this.fetchSongs(); 
      }

      componentWillUnmount() {}
    
      openModal (e) {
        const video = e.target.dataset.video;                 

        this.setState({videoId: video});
        this.setState({isOpen: true});
      }

      fetchSongs = () => {
            axios.get('/api/songs')
              .then((response) => {
                const { songs } = response.data;
                this.setState({ songs: commonScript.sortByRank(songs) })
              })
              .catch(() => alert('Error fetching songs'));
          }        
    
      render() {   
        const { songs } = this.state;      
        
      return (
          <div className="musicGrid">                                        
              <PageHeader title="Music" subtitle="demos" icon={<HeadsetIcon className="icon"></HeadsetIcon>}></PageHeader>                                                            
              <div className="musicBody">
                  {
                    songs.map(obj => (
                      <div key={obj._id}>
                                <Row className="musicRow">
                                  <Col>                                    
                                      <div className="songDetail">
                                             <h2>{obj.title}</h2>                                                                
                                              <div className="lyrics">
                                                    {Parser(obj.lyrics)}                                
                                              </div>
                                      </div>
                                    </Col>
                                    <Col className="musicCol">                                    
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
                                        <hr/>
                                    </Col>                  
                                </Row>                                        
                        </div>
                    ))                  
                  }
              </div>
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

export default Music;