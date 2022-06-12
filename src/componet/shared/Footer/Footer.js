import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="my-3 bg text-white">
      <Container>
        <Row>
          <Col xs={12} md={2}>
          <div className="px-2 my-1">
              <h3>Tour Type</h3>
              <p>Wild & Adventure Tours</p>
              <p>Group Tour</p>
              <p>Seasonal Tours</p>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <div className="px-2 my-1">
              <h3>Latest Tweets</h3>
              <p className="text-muted">
                Latest Tweets Envato Elements just got even better with its
                awesome new web template category! Sep 21, 2016 "Evergreen
                content
              </p>
            </div>
          </Col>
          <Col xs={12} md={5}>
          <div className="px-2 my-1">
              <h3>More Details us </h3>
              <p className="text-muted">
                Truva is an outstanding company who need tourisim, travel
                design. When you need a tour we are here for help with
                professional tourisim team. For more information and about
                prices, please visit our services page. Thanks for stop on Truva
                tour company.
              </p>
            </div>
          </Col>
          <Col xs={12} md={2}>
          <div className="px-2 my-1">
              <Link className="link" to="header">
                Header
              </Link>
              <Link className="link" to="/services">
                Services
              </Link>
              <Link className="link" to="/blogs">
                Blogs
              </Link>
              <Link className="link" to="/about">
                about
              </Link>
              <Link className="link" to="/about">
                Login
              </Link>
              <Link className="link" to="/signup">
                SignUp
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
