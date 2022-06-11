import React from "react";
import { Navbar, Container, Nav, Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Container>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/young-man-arms-outstretched-by-sea-sunrise-enjoying-freedom-life-people-travel-wellbeing-concept_169160-68.jpg?w=740"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg?t=st=1654966245~exp=1654966845~hmac=27dd33d8ff35f5a9f3041b416220dcecb48318178870dd99b1118a6482af8c42&w=996"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-psd/corporate-business-multipurpose-flyer-design-brochure-cover-page-template_169307-1192.jpg?w=740"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
