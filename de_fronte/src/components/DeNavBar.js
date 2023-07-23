import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import {NavLink} from 'react-router-dom';
import RouteButton from './RouteButton';
import { useSignOut } from '../hooks/useSignOut';
// import logo from './logo.png';

function DeNavBar() {
  const { signout } = useSignOut()

  const handleClick = () => {
    signout()
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
          <Navbar.Brand href="/">
            <img
              src="logo128.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> De Garage</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

    
            <RouteButton label='Home' route='/'></RouteButton>
            <RouteButton label='Members' route='/members'></RouteButton>
            <RouteButton label='Sign In' route='/signin'></RouteButton>
            <RouteButton label='Sign Up' route='/signup'></RouteButton>
            <Button variant='dark' label='Sign Out' onClick={handleClick}>Sign Out</Button>
          
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DeNavBar;