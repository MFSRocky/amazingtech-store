import "../pages/About.css"
import { Container, Row, Col, Card } from "react-bootstrap";

export default function About() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-lg rounded-3">
            <h1 className="mb-3 text-center">About</h1>
            <p>
              Welcome to <strong>AmazingTech</strong> – your go-to demo store for
              exploring the latest in technology, gadgets, and innovative products.
              This site is built using <code>FakeStoreAPI</code>, which provides
              sample product data for learning and testing purposes.
            </p>
            <p>
              Our mission is to showcase how a modern eCommerce website can be
              built using technologies like <strong>React</strong>,{" "}
              <strong>Redux</strong>, and <strong>Bootstrap</strong>. While the
              products you see here aren’t real, the shopping experience is fully
              functional – including browsing, adding items to your cart, and
              checking out.
            </p>
            <p>
              At AmazingTech, we believe in making learning practical, interactive,
              and fun. This project is perfect for developers and tech enthusiasts
              who want to see how a professional store might look and work.
            </p>
            <h4 className="mt-4">Why AmazingTech?</h4>
            <ul>
              <li>📱 Explore trending gadgets and products (demo only)</li>
              <li>⚡ Built with React + Redux + Bootstrap</li>
              <li>🛒 Fully functional cart and product pages</li>
              <li>🎯 Perfect for testing and learning eCommerce development</li>
            </ul>
            <p className="mt-4 text-center">
              🚀 Dive in and start exploring products today!
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
