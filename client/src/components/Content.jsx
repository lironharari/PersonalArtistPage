import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Manager = lazy(() => import('./Manager'));
const Kids = lazy(() => import('./Kids'));
const Documentary = lazy(() => import('./Documentary'));  
const StreetPhotography = lazy(() => import('./StreetPhotography'));                  
const Music = lazy(() => import('./Music'));                  
const Notfound = lazy(() => import('./Notfound'));                                                              
const Home = lazy(() => import('./Home'));                                                              
const Drawings = lazy(() => import('./Drawings'));                                                              
const Animals = lazy(() => import('./Animals'));                                                              
const LifeOnTheRailroads = lazy(() => import('./LifeOnTheRailroads'));                                                              
const ItsMoreFunInManila = lazy(() => import('./ItsMoreFunInManila'));                                                              
const About = lazy(() => import('./About'));                                                              

class Content extends Component {
  
    render() {

      return (     
        <Router>  
          <Suspense fallback={<div id="loading">Loading...</div>}>
            <Switch>                      
            <Route activeClassName='is-active' exact={true} path="/" component={Home} />
            <Route exact path="/drawings" component={Drawings} />
            <Route exact path="/animals" component={Animals} />
            <Route exact path="/manager" component={Manager} />    
            <Route exact path="/kids" component={Kids} />    
            <Route exact path="/human-history-revisited" component={Documentary} />    
            <Route exact path="/street-photography" component={StreetPhotography} />    
            <Route exact path="/music" component={Music} />    
            <Route exact path="/life-on-the-railroads" component={LifeOnTheRailroads} />    
            <Route exact path="/its-more-fun-in-manila" component={ItsMoreFunInManila} />                  
            <Route exact path="/about" component={About} />                  
            <Route component={Notfound} />
            </Switch> 
            </Suspense>
        </Router> 
      );
    }
  }
  

export default Content;