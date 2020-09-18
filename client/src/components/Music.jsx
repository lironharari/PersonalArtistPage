import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PageHeader from './PageHeader';
import Parser from 'html-react-parser';
import * as commonScript from '../script/common';
import ModalVideo from 'react-modal-video'
import { CircularProgress } from '@material-ui/core';
const { isEmpty } = require('lodash');				

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
    
      openModal = (e) => {
        this.setState({videoId: e.target.dataset.video});
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
              <PageHeader title="Music" subtitle="Home demos"></PageHeader>                                                            
              <div className="musicBody">
                {!isEmpty(songs) ? (
                      <>
                      { songs.map(obj => (                      
                          <div key={obj._id}>
                                    <Row className="musicRow">
                                      <Col>                                    
                                          <div className="songDetail">
                                                <h2>{obj.title}</h2>                                                                
                                                  <div className="lyrics"> {Parser(obj.lyrics)}</div>
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
                                        <Col> <hr/> </Col>                  
                                    </Row>                                        
                            </div>                            
                        ))}                      
                      </>
                    ) : <div className="spinner"><CircularProgress /></div>}                                       
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