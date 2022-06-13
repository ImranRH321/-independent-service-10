import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.int";
import Loading from "../Loading/Loading";

const SignUp = () => {
  const useName = useRef("");
  const useEmail = useRef("");
  const usePassword = useRef("");
  const useConfirmPassword = useRef("");
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // ...
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  // ...
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  if (loading || loading1 || updating) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (error || error1 || updateError) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message} {updateError?.message}
      </p>
    );
  }

  if (user || user1) {
    navigate("/home");
    console.log(user);
  }
  const handleCreateUser = async event => {
    event.preventDefault();
    
    const name = useName.current.value;
    const email = useEmail.current.value;
    const password = usePassword.current.value;
    const confirmPassword = useConfirmPassword.current.value;

    if (password.length > 5) {
      if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
        alert(" password At least one special character");
        return;
      }
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(email, password);

        await updateProfile({ displayName: name });
        navigate("/home");
      } else {
        alert("password and confirm password is not match ");
      }
    } else {
      alert("minimum 6 characters");
    }
  };

  return (
    <div>
      <div className=" mx-auto border p-3 mt-5 rounded singUpBg text-white">
        <h1 className=" mb-4 text-center">
          <mark className="px-4 LTitle">SignUp page</mark>
        </h1>
        <Form onSubmit={handleCreateUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-primary">Name</Form.Label>
            <Form.Control ref={useName} type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-primary">Email address</Form.Label>
            <Form.Control
              classNme="input"
              ref={useEmail}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-primary">Password</Form.Label>
            <Form.Control
              classNme="input"
              ref={usePassword}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-primary">Confirm-Password</Form.Label>
            <Form.Control
              classNme="input"
              ref={useConfirmPassword}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          {errorElement}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <div className="d-flex align-items-center justify-content-center">
              <Form.Check
                onClick={() => setAgree(!agree)}
                name="checkbox"
                type="checkbox"
              />
              <Form.Label
                className={`ps-2  pt-1 ${agree ? "" : "text-danger"}`}
              >
                new user checkbox ?
              </Form.Label>
            </div>
          </Form.Group>
          <div className="d-flex d-md-flex">
            <Button
              disabled={!agree}
              className="w-25 mx-auto d-block btnColor"
              type="submit"
            >
              SignUp
            </Button>
            <Button
              onClick={() => signInWithGoogle()}
              className="w-25 mx-auto d-block btnG"
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
