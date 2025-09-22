import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Mail, Phone, MapPin } from "lucide-react";
import NiceButton from "../components/Button";
import "../pages/Contact.css";

export default function Contact() {
  return (
    <Container className="contact">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="p-4 shadow-lg rounded-3">
            <h1 className="text-center mb-4">Contact Us</h1>
            <Row>
              {/* Contact Info */}
              <Col md={5} className="mb-4">
                <h4>Get in Touch</h4>
                <p>
                  Have questions about <strong>AmazingTech</strong>?  
                  We’d love to hear from you! Reach out using the form or the
                  details below:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-center">
                    <Mail className="me-2 text-primary" /> support@amazingtech.com
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <Phone className="me-2 text-primary" /> +20 (010) 123-4567
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <MapPin className="me-2 text-primary" /> 123 Tech Street,
                    Innovation City, Egypt
                  </li>
                </ul>
              </Col>

              {/* Contact Form */}
              <Col md={7}>
                <h4>Send us a message</h4>
                <Form>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Type your message here..."
                    />
                  </Form.Group>
                  <NiceButton/>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
