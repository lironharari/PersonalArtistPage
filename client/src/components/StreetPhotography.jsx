import React from 'react';
import Gallery from './Gallery';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import PageHeader from './PageHeader';

class StreetPhotography extends React.Component {      
  render() {         
    return (        
      <div>                         
          <PageHeader title="Street Photography" subtitle="various" icon={<CameraRollIcon className="icon"></CameraRollIcon>}></PageHeader>                              
          <Gallery category="street"></Gallery>
      </div>                 
    );
  }
}
  
export default StreetPhotography;