import React, { Component } from 'react';
import './style/Lightbox.css';
import './style/Responsive.css';
import './style/Fonts.css';
import './style/modal-video.scss';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Content from './components/Content';


class App extends Component {  
  render() {
    return (
      <div className="App"> 
        <NavBar />
        <Content />        
        <Footer />
      </div>
    );
  }
}

export default App;
