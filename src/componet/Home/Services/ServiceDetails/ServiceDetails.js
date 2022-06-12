import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  let { bookId } = useParams();

  const [services, setServices] = useState({});
  useEffect(() => {
    fetch("/services.json")
      .then(res => res.json())
      .then(data => {
        const person = data.find(pd => pd.id == bookId);
        setServices(person);
      });
  }, []);
  console.log(bookId);
  console.log(services);
  return (
    <div>
      <h2>Service Details </h2>
      <div className="row">
        <div className="col-md-6">
          <div className=" d-flex  mx-auto align-items-center border  text-white shadow-lg p-3 mb-5  rounded">
            <div className="w-100 mt-2">
              <img className="w-100 rounded" src={services.image} alt="" />
            </div>
            <div className="text-center text-dark w-75">
              <h5 className="mt-4">{services.name}</h5>
              <h4 className="mb-4">Price: {services.price}</h4>
              <p className="px-2 font-italic text-muted">{services.description}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="w-50 mx-auto w-75">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-primary">Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-primary">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-primary">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-primary">
                  Confirm-Password
                </Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <div className="d-flex align-items-center justify-content-center"></div>
              </Form.Group>
              <button className="bg-dark text-white p-2 w-50 mx-auto">Checkout</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
