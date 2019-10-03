import React, { Component } from 'react';
import { MDBRow, MDBCol } from "mdbreact";

class Home extends Component {
  
    render() {
      return (
        <div className="homeContainer">
              <MDBRow className="mt-4">
                  <MDBCol md="12" className="flex-center">              
                      <div className='homePage'>
                        
                      </div>              
                  </MDBCol>             
              </MDBRow>      
        </div>      
      );
    }
  }
  

export default Home;