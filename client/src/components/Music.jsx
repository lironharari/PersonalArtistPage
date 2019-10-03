import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HeadsetIcon from '@material-ui/icons/Headset';
import PageHeader from './PageHeader';
import Parser from 'html-react-parser';
import * as commonScript from '../script/common';

class Music extends React.Component {      
    constructor(props) {
        super(props);        
        this.state = {
          songs: []
        };   
      }
      componentDidMount() {    
          this.fetchSongs(); 
      }

      componentWillUnmount() {}
    
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
              {
                songs.map(obj => (
                  <div key={obj._id}>
                            <Row className="musicRow">
                                <Col>      
                                        <h2>{obj.title}</h2>                                                                
                                        <div className="lyrics">
                                              {Parser(obj.lyrics)}                                
                                        </div>
                                </Col>
                                <Col>                                    
                                    <object title={obj.title} data={obj.src}  >
                                        <span>could not diplay YouTube video</span>
                                    </object>                                    
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
        );
    }
  }

export default Music;