import React from "react";
import { Navbar, Container, Nav, Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div style={{height:'500px'}}>
      <Container>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
             style={{height:'500px'}}
              className="d-block w-100 "
              src="https://cdn.pixabay.com/photo/2017/08/02/13/20/people-2571590_960_720.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
                style={{height:'500px'}}
              className="d-block w-100"
              src="https://monaltravels.com/wp-content/uploads/2021/01/Tour-Alone.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
                style={{height:'500px'}}
              className="d-block w-100"
              src="https://img.freepik.com/free-psd/explore-concept-banner-template_23-2148652998.jpg?t=st=1655038452~exp=1655039052~hmac=9ff821cf676dbe66fc54360d1110f2dd0567abb4541d505f964e9039977ca4c2&w=996"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Banner;
