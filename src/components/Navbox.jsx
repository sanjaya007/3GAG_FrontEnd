import React from "react";

import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "../css/nav.css";

const Navbox = () => {
  return (
    <>
      <Container fluid className="nav-container">
        <Row>
          <Col md="10" className="mx-auto">
            <Navbar expand="sm">
              <Navbar.Brand href="#home">3GAG</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>
                  <Nav.Link href="#link">Gadgets</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbox;
