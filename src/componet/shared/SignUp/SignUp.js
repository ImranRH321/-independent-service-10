import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.int";

const SignUp = () => {
  const useName = useRef("");
  const useEmail = useRef("");
  const usePassword = useRef("");
  const useConfirmPassword = useRef("");
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleCreateUser = event => {
    event.preventDefault();
    const name = useName.current.value;
    const email = useEmail.current.value;
    const password = usePassword.current.value;
    const confirmPassword = useConfirmPassword.current.value;
    // console.log(name, email, password, confirmPassword);
    createUserWithEmailAndPassword(email, password);
  };

  console.log(agree);
  return (
    <div>
      <div className="w-50 mx-auto border p-3 mt-5 rounded bg-light">
        <h1 className=" mb-4 text-center">
          <mark className="px-4   text-dark ">SignUp page</mark>
        </h1>
        <Form onSubmit={handleCreateUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-primary">Name</Form.Label>
            <Form.Control
              ref={useName}
              type="text"
              placeholder="Your Name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-primary">Email address</Form.Label>
            <Form.Control
              ref={useEmail}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-primary">Password</Form.Label>
            <Form.Control
              ref={usePassword}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-primary">Confirm-Password</Form.Label>
            <Form.Control
              ref={useConfirmPassword}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <div className="d-flex align-items-center justify-content-center">
              <Form.Check
                onClick={() => setAgree(!agree)}
                name="checkbox"
                type="checkbox"
              />
              <Form.Label className={`ps-2 pt-1 ${agree ? "" : "text-danger"}`}>
                new user checkbox ?
              </Form.Label>
            </div>
          </Form.Group>
          <div className="d-flex d-md-flex">
            <Button
              disabled={!agree}
              className="w-25 mx-auto d-block"
              variant="dark"
              type="submit"
            >
              SignUp
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
            All ready have Account ?
            <Link className="text-decoration-none" to="/login">
              Please Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
