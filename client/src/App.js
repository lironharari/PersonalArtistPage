import React, { Component } from 'react';
import './style/Lightbox.css';
import './style/Responsive.css';
import './style/Fonts.css';
import './style/modal-video.scss';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notfound from './components/Notfound';
import Home from './components/Home';
import Drawings from './components/Drawings';
import Animals from './components/Animals';
// import Manager from './components/Manager';
import Kids from './components/Kids';              
import Documentary from './components/Documentary';                            
import StreetPhotography from './components/StreetPhotography';                                                        
import Music from './components/Music';                                                        
import DocumentaryPhotography from './components/DocumentaryPhotography';                                                                      

class App extends Component {  
  render() {
    return (
      <div className="App"> 
        <NavBar />
        <Router>  
            <Switch>                      
            <Route activeClassName='is-active' exact={true} path="/" component={Home} />
            <Route exact path="/drawings" component={Drawings} />
            <Route exact path="/animals" component={Animals} />
            {/* <Route exact path="/manager" component={Manager} />     */}
            <Route exact path="/kids" component={Kids} />    
            <Route exact path="/human-history-revisited" component={Documentary} />    
            <Route exact path="/street-photography" component={StreetPhotography} />    
            <Route exact path="/music" component={Music} />    
            <Route exact path="/life-on-the-railroads" component={DocumentaryPhotography} />    
            <Route exact path="/its-more-fun-in-manila" component={DocumentaryPhotography} />                  
            <Route  component={Notfound} />
            </Switch> 
        </Router>
      </div>
    );
  }
}

export default App;
