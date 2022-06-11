import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="w-50 mx-auto border p-3 mt-5 rounded bg-light">
        <h1 className="text-center ">
          <mark className="px-4 text-primary">Login page</mark>
        </h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-primary">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-primary">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <div className="d-flex d-md-flex">
            <Button
              className="w-25 mx-auto d-block"
              variant="dark"
              type="submit"
            >
              Login
            </Button>
            <Button
              className="w-25 mx-auto d-block"
              variant="dark"
              type="submit"
            >
              Google
            </Button>
          </div>
          <p className="mt-2 mb-0">
            New User ? 
            <Link className="text-decoration-none" to="/signup">
               Please SignUp
            </Link>
          </p>
          <p className="">
            Forget Password ?
            <button className="btn btn-danger ms-2 mt-2">Please Reset</button>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
