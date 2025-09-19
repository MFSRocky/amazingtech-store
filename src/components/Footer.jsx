import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import "../components/Footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row>
          <Col md={6} lg={4} className="mb-4">
            <h5 className="text-uppercase fw-bold">AmazingTech</h5>
            <p>
              Your one-stop shop for the latest and greatest in technology and
              gadgets. Discover, learn, and shop with us.
            </p>
          </Col>

          <Col md={6} lg={2} className="mb-4">
            <h5 className="text-uppercase fw-bold">Products</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/category/electronics" className="text-white text-decoration-none footer-link">Electronics</Link></li>
              <li><Link to="/category/jewelery" className="text-white text-decoration-none footer-link">Jewelery</Link></li>
              <li><Link to="/category/men's clothing" className="text-white text-decoration-none footer-link">Men's Clothing</Link></li>
              <li><Link to="/category/women's clothing" className="text-white text-decoration-none footer-link">Women's Clothing</Link></li>
            </ul>
          </Col>

          <Col md={6} lg={2} className="mb-4">
            <h5 className="text-uppercase fw-bold">Useful Links</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/cart" className="text-white text-decoration-none footer-link">Cart</Link></li>
              <li><Link to="/services" className="text-white text-decoration-none footer-link">Services</Link></li>
              <li><Link to="/" className="text-white text-decoration-none footer-link">Home</Link></li>
            </ul>
          </Col>

          <Col md={6} lg={4} className="mb-4">
            <h5 className="text-uppercase fw-bold">Follow Us</h5>
            <p>Stay connected for the latest updates and offers.</p>
            <div>
              <a href="#!" className="text-white me-3 footer-icon"><Facebook /></a>
              <a href="#!" className="text-white me-3 footer-icon"><Twitter /></a>
              <a href="#!" className="text-white me-3 footer-icon"><Instagram /></a>
              <a href="#!" className="text-white footer-icon"><Linkedin /></a>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="align-items-center">
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} AmazingTech. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}