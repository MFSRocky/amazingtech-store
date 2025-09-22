import { Container, Row, Col, Card } from "react-bootstrap";
import { ShoppingCart, Smartphone, Code, Globe } from "lucide-react";
import "../pages/Services.css";

export default function Services() {
  const services = [
    {
      icon: <Smartphone size={40} />,
      title: "Tech & Gadgets Showcase",
      description:
        "Browse a wide range of demo products powered by FakeStoreAPI – from electronics to accessories.",
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "Shopping Experience",
      description:
        "Add items to your cart, track totals, and simulate checkout – just like a real online store.",
    },
    {
      icon: <Code size={40} />,
      title: "Developer-Friendly",
      description:
        "AmazingTech is built with React, Redux, and Bootstrap – making it a perfect learning project.",
    },
    {
      icon: <Globe size={40} />,
      title: "Responsive Design",
      description:
        "Enjoy a smooth shopping experience on desktop, tablet, or mobile with a modern responsive UI.",
    },
  ];

  return (
    <Container className="services">
      <h1 className="text-center">Our Services</h1>
      <Row className="g-4">
        {services.map((service, index) => (
          <Col md={6} lg={3} key={index}>
            <Card className="p-4 text-center shadow-lg rounded-3 h-100 service-card">
              <div className="mb-3 text-primary">{service.icon}</div>
              <h4>{service.title}</h4>
              <p className="text-muted">{service.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
