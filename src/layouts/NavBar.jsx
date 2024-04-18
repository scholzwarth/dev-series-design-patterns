import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import leonardo from '../assets/leonardo.jpg';
import { CupStraw } from 'react-bootstrap-icons';

const NavBar = () => {
  return (
    <Navbar variant="primary-app" className="sticky-top">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" end className="d-flex align-items-center flex-column">
          <CupStraw size={30} />
          {/* <img
            className="p-0"
            src={leonardo}
            style={{ maxWidth: '200px' }}
            alt="NCEM Logo"
          /> */}
        </Navbar.Brand>
        <Nav className="w-100 justify-content-end pt-3 pt-md-0">
          <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/factory" end>Factory</Nav.Link>
          <Nav.Link as={NavLink} to="/singleton" end>Singleton</Nav.Link>
          <Nav.Link as={NavLink} to="/decorator" end>Decorator</Nav.Link>
          <Nav.Link as={NavLink} to="/observer" end>Observer</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;