import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicIcon from '@material-ui/icons/Audiotrack';
import Pets from '@material-ui/icons/Pets';
import DrawingsIcon from '@material-ui/icons/Create';
import RailwayIcon from '@material-ui/icons/DirectionsRailway';
import CameraIcon from '@material-ui/icons/LocalSee';
import ChildCare from '@material-ui/icons/ChildCare';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Button from '@material-ui/core/Button';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notfound from './Notfound';
import Home from './Home';
import Drawings from './Drawings';
// import Poverty from './Poverty';
import Manager from './Manager';
import Documentary from './Documentary';
import StreetPhotography from './StreetPhotography';
import Music from './Music';
import Animals from './Animals';
import DocumentaryPhotography from './DocumentaryPhotography';
import Kids from './Kids';

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,    
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,    
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'rgba(0,0,0,.5)',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    // backgroundColor:'#FFFFFF'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);  

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            <span onClick={() => window.location.href = "/"}>
                Liron Harari
            </span>            
          </Typography>      
          <Button className="barLinks" color="inherit" onClick={() => window.location.href = "/human-history-revisited"}>documentary</Button>
          <DropdownButton className="barLinks" id="dropdown-item-button" title="photography">
              <Dropdown.Item as="button" onClick={() => window.location.href = "/life-on-the-railroads"} >Life on the Railroads</Dropdown.Item>                  
              <Dropdown.Item as="button" onClick={() => window.location.href = "/its-more-fun-in-manila"} >It's more fun in Manila!</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as="button" onClick={() => window.location.href = "/street-photography"} >Street Photography</Dropdown.Item>            
              <Dropdown.Item as="button" onClick={() => window.location.href = "/animals"} >Animals</Dropdown.Item>            
              <Dropdown.Item as="button" onClick={() => window.location.href = "/kids"} >Kids</Dropdown.Item>            
              {/* <Dropdown.Item as="button" onClick={() => window.location.href = "/poverty"} >Poverty</Dropdown.Item>                           */}
          </DropdownButton>
          <Button className="barLinks" color="inherit" onClick={() => window.location.href = "/drawings"}>drawings</Button>
          <Button className="barLinks" color="inherit" onClick={() => window.location.href = "/music"}>music</Button>          
        </Toolbar>
      </AppBar>
      
      
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>

            <Divider />

            <List>  
                <ListItem button onClick={() => window.location.href = "/human-history-revisited"} >
                  <ListItemIcon><PlayArrowIcon /></ListItemIcon>
                  <ListItemText primary="Human History Revisited" />
                </ListItem>
            </List>

            <Divider />
            <List>
            <ListItem button onClick={() => window.location.href = "/street-photography"} >
                            <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
                            <ListItemText primary="Street Photography" />
                </ListItem>            
                <ListItem button onClick={() => window.location.href = "/life-on-the-railroads"} >
                            <ListItemIcon><RailwayIcon /></ListItemIcon>
                            <ListItemText primary="Life on the Railroads" />
                </ListItem>                                    
                <ListItem button onClick={() => window.location.href = "/its-more-fun-in-manila"} >
                            <ListItemIcon><CameraIcon /></ListItemIcon>
                            <ListItemText primary="It's more fun in Manila!" />
                </ListItem>    
                <ListItem button onClick={() => window.location.href = "/animals"} >
                            <ListItemIcon><Pets /></ListItemIcon>
                            <ListItemText primary="Animals" />
                </ListItem>                                                              
                <ListItem button onClick={() => window.location.href = "/kids"} >
                            <ListItemIcon><ChildCare /></ListItemIcon>
                            <ListItemText primary="Kids" />
                </ListItem>                      
                {/* <ListItem button onClick={() => window.location.href = "/poverty"} >
                            <ListItemIcon><ChildCare /></ListItemIcon>
                            <ListItemText primary="Poverty" />
                </ListItem>                                               */}
            </List>
            <Divider />
            <List>
            <ListItem button onClick={() => window.location.href = "/drawings"} >
                  <ListItemIcon><DrawingsIcon /></ListItemIcon>
                  <ListItemText primary="Drawings" />
                </ListItem>
                <ListItem button onClick={() => window.location.href = "/music"} >
                  <ListItemIcon><MusicIcon /></ListItemIcon>
                  <ListItemText primary="Music" />
                </ListItem>            
            </List>
          </Drawer>      
      



      
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />        
            <Router>  
                <Switch>
                <Route activeClassName='is-active' exact={true} path="/" component={Home} />            
                <Route path="/drawings" component={Drawings} />        
                <Route path="/animals" component={Animals} />  
                <Route path="/manager" component={Manager} />                                
                {/* <Route path="/poverty" component={Poverty} />                     */}
                <Route path="/kids" component={Kids} />                    
                <Route path="/human-history-revisited" component={Documentary} />        
                <Route path="/street-photography" component={StreetPhotography} />                  
                <Route path="/music" component={Music} />
                <Route path="/life-on-the-railroads" component={DocumentaryPhotography} />       
                <Route path="/its-more-fun-in-manila" component={DocumentaryPhotography} />    
                <Route component={Notfound} />
                </Switch> 
            </Router> 
          </main>        
      
    </div>
  );
}
