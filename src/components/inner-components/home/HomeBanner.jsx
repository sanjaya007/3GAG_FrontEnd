import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomeBanner = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className="home-banner flex-css">
              <div className="heading text-center">
                <span>3GAG</span>
                <p> Gadgets for lifestyle </p>
                <button> Sign In </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeBanner;
