import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Row";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div className="container">
      <div className="row container">
        <h2>Services pages</h2>
        {services.map(service => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
