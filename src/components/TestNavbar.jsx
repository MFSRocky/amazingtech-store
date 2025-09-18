import { Navbar, Nav, NavDropdown, Form, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>AmazingTech</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/link">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Categories" id="navbarDropdown">
              <LinkContainer to="/action">
                <NavDropdown.Item>Action</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/another-action">
                <NavDropdown.Item>Another action</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/something-else">
                <NavDropdown.Item>Something else here</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
       
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
