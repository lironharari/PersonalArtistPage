import React, { Component } from 'react';
import { MDBRow, MDBCol } from "mdbreact";
import MaterialSkeleton from '@material-ui/lab/Skeleton';

class Skeleton extends Component {      
    render() {    
      return (
        <div>
            <MDBRow>   
              <MDBCol>
                <figure>
                    <MaterialSkeleton variant="rect" height={250} />
                    <React.Fragment>
                      <MaterialSkeleton />
                      <MaterialSkeleton width="60%" />
                    </React.Fragment>
                </figure>
              </MDBCol>
              <MDBCol>
                <figure>
                    <MaterialSkeleton variant="rect" height={250} />
                    <React.Fragment>
                      <MaterialSkeleton />
                      <MaterialSkeleton width="60%" />
                    </React.Fragment>
                </figure>
              </MDBCol>              
              <MDBCol>
                    <figure>
                          <MaterialSkeleton variant="rect" height={250} />
                          <React.Fragment>
                            <MaterialSkeleton />
                            <MaterialSkeleton width="60%" />
                          </React.Fragment>
                      </figure>
              </MDBCol>                                                
            </MDBRow>   
            <MDBRow>   
              <MDBCol>
                <figure>
                    <MaterialSkeleton variant="rect" height={250} />
                    <React.Fragment>
                      <MaterialSkeleton />
                      <MaterialSkeleton width="60%" />
                    </React.Fragment>
                </figure>
              </MDBCol>
              <MDBCol>
                <figure>
                    <MaterialSkeleton variant="rect" height={250} />
                    <React.Fragment>
                      <MaterialSkeleton />
                      <MaterialSkeleton width="60%" />
                    </React.Fragment>
                </figure>
              </MDBCol>              
              <MDBCol>
                    <figure>
                          <MaterialSkeleton variant="rect" height={250} />
                          <React.Fragment>
                            <MaterialSkeleton />
                            <MaterialSkeleton width="60%" />
                          </React.Fragment>
                      </figure>
              </MDBCol>                                                
            </MDBRow>                     
        </div>      
      );
    }
  }
  

export default Skeleton;