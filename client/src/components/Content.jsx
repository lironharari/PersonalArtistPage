import React, { Component } from 'react';
// import Manager from './components/Manager';
import Kids from './Kids';              
import Documentary from './Documentary';                            
import StreetPhotography from './StreetPhotography';                                                        
import Music from './Music';                                                        
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notfound from './Notfound';
import Home from './Home';
import Drawings from './Drawings';
import Animals from './Animals';
import LifeOnTheRailroads from './LifeOnTheRailroads';
import ItsMoreFunInManila from './ItsMoreFunInManila';
// import About from './About';

class Content extends Component {
  
    render() {

      return (     
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
            <Route exact path="/life-on-the-railroads" component={LifeOnTheRailroads} />    
            <Route exact path="/its-more-fun-in-manila" component={ItsMoreFunInManila} />                  
            {/* <Route exact path="/about" component={About} />                   */}
            <Route component={Notfound} />
            </Switch> 
        </Router> 
      );
    }
  }
  

export default Content;