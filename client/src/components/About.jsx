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
                                    <h4>Something about me</h4>
                                    <p>
                                      From a very young age, I felt the need to express myself but my shyness was always an impediment.
                                      Things changed when I heard Metallica's "Sad but true" for the first time, soon after I picked up a guitar and I started to write songs. 
                                      Since then music has been a friend and a companion but also a therapist.
                                    </p>
                                    <p>
                                      After graduating from the university (computer science) I decided to start traveling in India. 
                                      I wrote many songs in that magical place and I ended up recording an EP in the US, 
                                      after which I decided to take a break from music, so I bought a cheap camera and I started traveling in Central America.
                                      Little did I know how exciting it would become to capture beauty on film. 
                                      Photography has brought me closer to people and through it, I was able to give a voice to the voiceless.
                                    </p>
                                    <p>
                                      I started doing street photography, I would walk for hours each day looking for interesting and random scenes.
                                      While traveling in Colombia, I decided to shift my focus from street photography to documentary photography,
                                      and I ended up doing two major projects where I documented underprivileged communities in India and the Philippines.
                                    </p>
                                    <p>
                                      Once these photography projects were completed, I started looking for the next venture and I came across a theory called Intervention,
                                      so I settled in the Indian Himalaya and I studied it for six months, after which I got the idea to produce a YouTube series that will present the theory in a structured and clear manner,
                                      thus "Human History Revisited" was born.
                                    </p>
                                    <p>
                                      While producing the series, I started drawing cartoons and eventually I came up with the idea for a comic book that is based on
                                      the characters I drew, consequently "The Life and Death of Joe Shmoe" came into being.
                                    </p>
                                    <p>
                                      I'll sum it up with a quote I resonate with from the legendary Bob Dylan, one of my all-time heroes:
                                    </p>                                
                                    <blockquote>
                                        <p class="quotation"> 
                                        Life isn't about finding yourself or finding anything, life is about creating yourself and creating things.
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