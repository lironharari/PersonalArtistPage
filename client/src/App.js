import React, { Component } from 'react';
import './style/Lightbox.css';
import './style/Responsive.css';
import './style/Fonts.css';
import './style/modal-video.scss';
import Drawer from './components/DrawerOverlay';

class App extends Component {  
  render() {
    return (
      <div className="App">        
        <Drawer />
      </div>
    );
  }
}

export default App;
