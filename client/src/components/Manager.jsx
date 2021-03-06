import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Manager extends Component {
  state = {
    src: '',
    category: '',
    subcategory: '',
    width: 0,
    height: 0,
    rank: 0
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });    
  };

  addMultiplePhotos = e => {
    e.preventDefault();
    const list = [
      // {
      //   "src": "main-qimg-837a814784a1961317e8eee2a663e160-c.jpg",
      //   "description": "the solar system",
      //   "height": 437,
      //   "width": 777
      // },            
    ];
    
    const photos = [];
    
    list.map((x) => {
      photos.push({ 
        src:x.src, 
        category:"humanHistoryRevisited", 
        subcategory:"episode3",
        description:x.description,
        width:x.width, 
        height:x.height,         
        rank:0});
        return true;
    });

    //console.log(photos);
    photos.map((x) => {          
          axios({
            url: '/addPhoto',
            method: 'POST',
            data: {
              src:x.src, 
              category:x.category,
              subcategory:x.subcategory, 
              width:x.width, 
              height:x.height,
              description:x.description,
              rank:x.rank        
            }
          })
            .then((response) => {        
                console.log(response.data);              
            })
            .catch(() => alert('Failed adding photo'));
      return true;    
    });    
  };  
  
  submitUpdate = e => {
    e.preventDefault();
    const { src, rank } = this.state;        
    this.searchPhotoBySrc(src,{ rank : rank });
  };

updatePhoto = ( id, update ) => {
      axios({
        url: '/api/updatePhoto',
        method: 'POST', 
        data: {
          id,
          update : update          
        }
      })
      .then((response) => {        
        console.log(response.data);              
        this.setState({
            src: '',
            rank: 0            
        });
              
      })
      .catch((error) => console.log(error))      
    }

searchPhotoBySrc = (src, update) => {
      axios({
        url: '/api/searchPhotoBySrc',
        method: 'POST', 
        data: {
          src
        }
      })
      .then((response) => {
        const { photo } = response.data;
        this.updatePhoto( photo._id, update );
      })
      .catch((error) => console.log(error))      
    }

  addPhoto = e => {
    e.preventDefault();
    const { src, category, subcategory, width, height } = this.state;    
    axios({
      url: '/addPhoto',
      method: 'POST',
      data: {
        src, category, subcategory, width, height
      }
    })
      .then(() => {        
        this.setState({
            src: '',
            category: '',
            subcategory: '',
            width: 0,
            height: 0
        });
      })
      .catch(() => alert('Failed adding photo'))
  };
  render() {
    return (
        <form className="form noValidate" autoComplete="off">
            <Row>
                <Col>                       
                        <h2>add photo</h2>
                        <TextField
                        id="standard-dense"
                        value={this.state.src}
                        label="src"
                        name="src"
                        onChange={this.handleChange}
                        />

                        <TextField
                        name="category"
                        value={this.state.category}
                        id="standard-dense"
                        onChange={this.handleChange}
                        label="category"
                        />

                        <TextField
                        name="subcategory"
                        value={this.state.subcategory}
                        id="standard-dense"
                        onChange={this.handleChange}
                        label="subcategory"
                        />

                        <TextField
                        name="width"
                        value={this.state.width}
                        id="standard-dense"
                        onChange={this.handleChange}
                        label="width"
                        />

                        <TextField
                        name="height"
                        value={this.state.height}
                        id="standard-dense"
                        onChange={this.handleChange}
                        label="height"
                        />
                        
                        <Button variant="contained" color="primary" onClick={this.addPhoto}> add </Button>
                                
                </Col>      
                <Col>

                        <h2>update photo</h2>
                    <TextField
                        id="standard-dense"
                        value={this.state.src}
                        label="src"
                        name="src"
                        onChange={this.handleChange}
                    />

                    <TextField
                        name="rank"
                        value={this.state.rank}
                        id="standard-dense"
                        onChange={this.handleChange}
                        label="rank"
                    />
                    
                    <Button variant="contained" color="primary" onClick={this.submitUpdate}> update </Button>
                </Col>
                <Col>
                    <Button variant="contained" color="primary" onClick={this.addMultiplePhotos}> add Multiple Photos </Button>
                </Col>          
            </Row>         
    </form>      
    );
  }
}

export default Manager;
