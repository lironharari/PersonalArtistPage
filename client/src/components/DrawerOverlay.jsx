import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MusicIcon from '@material-ui/icons/Audiotrack';
import Pets from '@material-ui/icons/Pets';
import DrawingsIcon from '@material-ui/icons/Create';
import RailwayIcon from '@material-ui/icons/DirectionsRailway';
import CameraIcon from '@material-ui/icons/LocalSee';
import ChildCare from '@material-ui/icons/ChildCare';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import Toolbar from '@material-ui/core/Toolbar';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Loadable from "react-loadable";

const LazyRoute = (props) => {
  const component = Loadable({
    loader: props.component,
    loading: () => <div></div>,
  });

  return <Route {...props} component={component} />;
};

const useStyles = makeStyles(theme => ({
root: {
    display: 'flex',
    flexGrow: 1,
    },
drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    },
  list: {
    width: 300,
  },
  title: {
    flexGrow: 1,    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'rgba(0,0,0,.5)',
  }
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const theme = useTheme();
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
        <div className={classes.drawerHeader}>
            <IconButton className="drawerCloser" onClick={toggleDrawer(side, false)}>
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
    </div>
  );

  return (
    <div className={classes.root}>
      
      <main className="main">            
            <Toolbar className="toolbarTop">

                <div className="barhome">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer('left', true)}
                            edge="start"
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                </div>

                <div className="barBrand">
                        <Typography variant="h6" noWrap className={classes.title}>                        
                            <span onClick={() => window.location.href = "/"}>
                                Liron Harari
                            </span>            
                        </Typography>
                </div>

                <div className="barLinks">
                    <Button color="inherit" onClick={() => window.location.href = "/human-history-revisited"}>documentary</Button>
                    <DropdownButton id="dropdown-item-button" title="photography">
                        <Dropdown.Item as="button" onClick={() => window.location.href = "/life-on-the-railroads"} >Life on the Railroads</Dropdown.Item>                  
                        <Dropdown.Item as="button" onClick={() => window.location.href = "/its-more-fun-in-manila"} >It's more fun in Manila!</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item as="button" onClick={() => window.location.href = "/street-photography"} >Street Photography</Dropdown.Item>            
                        <Dropdown.Item as="button" onClick={() => window.location.href = "/animals"} >Animals</Dropdown.Item>            
                        <Dropdown.Item as="button" onClick={() => window.location.href = "/kids"} >Kids</Dropdown.Item>            
                    </DropdownButton>
                    <Button color="inherit" onClick={() => window.location.href = "/drawings"}>drawings</Button>
                    <Button color="inherit" onClick={() => window.location.href = "/music"}>music</Button>                              
                </div>
        </Toolbar>
            <Router>  
                <Switch>
                <LazyRoute activeClassName='is-active' exact={true} path="/" component={() => import("./Home")} />
                <LazyRoute exact path="/drawings" component={() => import("./Drawings")} />
                <LazyRoute exact path="/animals" component={() => import("./Animals")} />
                <LazyRoute exact path="/manager" component={() => import("./Manager")} />    
                <LazyRoute exact path="/kids" component={() => import("./Kids")} />    
                <LazyRoute exact path="/human-history-revisited" component={() => import("./Documentary")} />    
                <LazyRoute exact path="/street-photography" component={() => import("./StreetPhotography")} />    
                <LazyRoute exact path="/music" component={() => import("./Music")} />    
                <LazyRoute exact path="/life-on-the-railroads" component={() => import("./DocumentaryPhotography")} />    
                <LazyRoute exact path="/its-more-fun-in-manila" component={() => import("./DocumentaryPhotography")} />    
                <LazyRoute component={() => import("./Notfound")} />                    
                </Switch> 
            </Router> 
          </main>        
      
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}