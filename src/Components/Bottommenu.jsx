import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsPhone, BsCartCheck, BsTruck } from "react-icons/bs"; // icons


const Bottommenu= () => {
  <>
    <Container>
      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <h1 className="display-3 fw-bold hero-title">
            The place that
            <br /> fits all
            <br /> your needs
          </h1>

          <p className="lead hero-subtitle">
            Crafted with love from{" "}
            <span className="brand">Quicksy Team</span> <span>❤️</span>
          </p>
        </Col>
      </Row>
    </Container>

    <Container className="how-it-works">
      <h2 className="text-center mb-5 fw-bold">How it Works</h2>

      <Row className="g-4 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="step-card h-100 text-center p-4">
            <BsPhone size={56} className="mb-3 icon" />
            <Card.Body>
              <Card.Title className="fw-bold">Open the app</Card.Title>
              <Card.Text>
                Choose from over 700 products across groceries, fresh fruits &
                veggies, meat, pet care, beauty items &amp; more
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <Card className="step-card h-100 text-center p-4">
            <BsCartCheck size={56} className="mb-3 icon" />
            <Card.Body>
              <Card.Title className="fw-bold">Place an order</Card.Title>
              <Card.Text>
                Add your favourite items to the cart &amp; avail the best offers
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <Card className="step-card h-100 text-center p-4">
            <BsTruck size={56} className="mb-3 icon" />
            <Card.Body>
              <Card.Title className="fw-bold">Get free delivery</Card.Title>
              <Card.Text>
                Experience lightning‑fast speed &amp; get all your items
                delivered in&nbsp;10&nbsp;minutes
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  
};

export default Bottommenu;
