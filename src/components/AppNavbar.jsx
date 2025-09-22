import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  Container,
  InputGroup,
  Badge,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Store, Search, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/services", text: "Services" },
  { to: "/contact", text: "Contact" },
];

const categories = [
  { to: "/category/electronics", text: "Electronics" },
  { to: "/category/jewelery", text: "Jewelery" },
  { to: "/category/men's clothing", text: "Men's Clothing" },
  { to: "/category/women's clothing", text: "Women's Clothing" },
];

const NavLinks = () => (
  <>
    {navLinks.map((link) => (
      <LinkContainer to={link.to} key={link.to}>
        <Nav.Link className="text-uppercase">{link.text}</Nav.Link>
      </LinkContainer>
    ))}
  </>
);

const CategoriesDropdown = () => (
  <NavDropdown
    title={<span className="text-uppercase">Categories</span>}
    id="categories-dropdown"
  >
    {categories.map((category) => (
      <LinkContainer to={category.to} key={category.to}>
        <NavDropdown.Item>{category.text}</NavDropdown.Item>
      </LinkContainer>
    ))}
  </NavDropdown>
);

const SearchAndCart = () => {
  const cartItemCount = useSelector((state) => state.cart.itemCount);

  return (
    <Nav className="align-items-center">
      <Form className="d-flex" style={{ maxWidth: 300 }} role="search">
        <InputGroup>
          <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <Button variant="warning" type="submit">
            <Search size={20} />
          </Button>
        </InputGroup>
      </Form>
      <LinkContainer to="/cart">
        <Nav.Link as="div" className="ms-lg-3 mt-2 mt-lg-0">
          <Button
            variant="outline-light"
            className="d-flex align-items-center position-relative"
            aria-label={`Shopping cart with ${cartItemCount} items`}
          >
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <Badge
                pill
                bg="danger"
                className="position-absolute top-0 start-100 translate-middle"
                style={{ fontSize: "0.8em", padding: "0.4em 0.6em" }}
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default function AppNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="py-3 position-fixed" fixed="top">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand aria-label="AmazingTech Home">
            <Store size={35} color="gold" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLinks />
            <CategoriesDropdown />
          </Nav>
          <SearchAndCart />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
