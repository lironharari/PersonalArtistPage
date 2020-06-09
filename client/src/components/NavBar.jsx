import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class NavBar extends React.Component {        
      render() {    
        
      return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white">
                <Navbar.Brand href="/">liron harari</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/human-history-revisited">documentary</Nav.Link>
                        <NavDropdown title="photography" id="collasible-nav-dropdown">                        
                            <NavDropdown.Item href="/life-on-the-railroads">life on the railroads</NavDropdown.Item>
                            <NavDropdown.Item href="/its-more-fun-in-manila">it's more fun in manila!</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/street-photography">street photography</NavDropdown.Item>
                            <NavDropdown.Item href="/animals">animals</NavDropdown.Item>
                            <NavDropdown.Item href="/kids">kids</NavDropdown.Item>
                        </NavDropdown>                        
                        <Nav.Link href="/drawings">drawings</Nav.Link>
                        <Nav.Link href="/music">music</Nav.Link>                                                                                                
                        {/* <Nav.Link href="/about">about</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>        
        );
    }
  }

export default NavBar;