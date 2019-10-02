import React, { Component } from 'react';
// import axios from 'axios';
// import Img from 'react-image'
// import Nav from 'react-bootstrap/Nav'
//import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBRow, MDBCol } from "mdbreact";
//import Skeleton from '@material-ui/lab/Skeleton';
// import * as commonScript from '../script/common';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     links:[]
  //   };              
  // } 
    
    // componentDidMount() {            
    // }
      
    // componentWillUnmount() {
    // }      

    // fetchLinks = () => {
    //     axios.get('/api/links')
    //         .then((response) => {
    //           const { links } = response.data;
    //           this.setState({ links: commonScript.sortByRank(links) })
    //         })
    //         .catch((error) => alert(error));
    //     }
      
    render() {
      // const { links } = this.state;
      return (
    <div className="homeContainer">

      
              <MDBRow className="mt-4">
                  <MDBCol md="12" className="flex-center">              
                      <div className='homePage'>
                        
                      </div>              
                  </MDBCol>             
              </MDBRow>
      
{/* 
        <Nav> 
        <MDBContainer>
        <MDBRow className="mt-4 homeHeader">
            <MDBCol md="12" className="flex-center">              
                <div>
                    <h2>liron</h2>
                    <h4>welcome</h4>
                </div>              
            </MDBCol>
        </MDBRow>
            <MDBRow className="mt-4">
                  {
                    links.map((obj) => (                      
                            <MDBCol md="6" className="homeCol" key={obj._id}>
                              <MDBView hover>   
                                <Img 
                                    className="img-fluid"                                    
                                    src={obj.src}
                                    loader={<Skeleton variant="rect" width="100%" height="100%" />}
                                  />                                            
                                <MDBMask className="flex-center" overlay="white-strong">
                                  <div className="black-text">
                                        <Nav.Link href={obj.href}>
                                            <div className="homeDescription">
                                                <h2>{obj.title}</h2>
                                                <h4>{obj.subtitle}</h4>
                                            </div>
                                      </Nav.Link>                          
                                  </div>
                                </MDBMask>
                              </MDBView>
                            </MDBCol>                            
                    ))                  
                  }        
            </MDBRow>                 
              </MDBContainer>
          </Nav>  */}
        </div>      
      );
    }
  }
  

export default Home;