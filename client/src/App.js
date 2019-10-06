import React, { Component } from 'react';
import './App.css';
import './style/Lightbox.css';
import './style/Responsive.css';
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
