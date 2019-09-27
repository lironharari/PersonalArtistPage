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
            axios.get('/songs')
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
                            <Row>
                                <Col>
                                    <hr/>
                                </Col>                  
                            </Row>            
                            <Row>
                                <Col>      
                                        <h2>{obj.title}</h2>                                                                
                                        {Parser(obj.lyrics)}                                
                                </Col>
                                <Col>
                                    <div className="video">
                                    <object title={obj.title} data={obj.src} width="560" height="315">
                                        <span>could not diplay YouTube video</span>
                                    </object>                                    
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

export default Music;