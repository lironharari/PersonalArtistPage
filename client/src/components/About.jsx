import React, { Component } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class About extends Component {
  
    render() {
      return (
        <div className="homeContainer">
              <div className='homePage'>                   
                        <Row className="justify-content-md-center">
                          <Col sm>
                              <div className="imageContainer">
                                  <img src="/images/home/portrait.jpg" alt="Liron's portrait"/>
                              </div>                                                     
                          </Col>
                          <Col sm>         
                              <div className="about">                                                                      
                                    <p>
                                      something
                                    </p>             
                                    <p>
                                      something
                                    </p>             
                                    <p>
                                      something
                                    </p>             
                                    <p>
                                      something
                                    </p>             
                                    <p>
                                      something
                                    </p>             
                                    <p>
                                      something
                                    </p>             
                                    <p>
                                      something
                                    </p>                                                 
                                    <blockquote>
                                        <p class="quotation"> 
                                            life is about creating yourself and creating things.
                                        </p>                                        
                                        <footer>— Bob Dylan</footer>
                                    </blockquote>                                                                              
                              </div>
                          </Col>
                        </Row>                     
              </div>              
        </div>      
      );
    }
  }
  

export default About;