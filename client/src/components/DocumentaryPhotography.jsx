import React from 'react';
import Gallery from './Gallery';
import PageHeader from './PageHeader';

class DocumentaryPhotography extends React.Component {      
    render() {         
      const manilaDocumentary =  "/its-more-fun-in-manila";      
      let title = "";
      let location = "";

      const subtitle = "Documentary";

      if(this.props.location.pathname === manilaDocumentary){
        location = "manila";
        title = "Manila, The Philippines";
      }        
      else{
        title = "Kolkata, India";
        location = "kolkata";                            
      }
              
      return (        
        <div> 
            <PageHeader title={title} subtitle={subtitle}></PageHeader>                   
            <Gallery category="documentary" location={location}></Gallery>
        </div>                 
      );
    }
  }

export default DocumentaryPhotography;