import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.int";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import './Login.css'

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const useEmail = useRef("");
  const usePassword = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, user1, loading1, errorGoggle] =
    useSignInWithGoogle(auth);

  const [sendPasswordResetEmail, sending, errorR] =
    useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading || loading1 || sending) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (error || errorGoggle || errorR)
    errorElement = (
      <p className="text-danger my-3">
        Error: {error?.message} {errorGoggle?.message} {errorR?.message}
      </p>
    );
  if (user || user1) {
    console.log('user1', user1);
    navigate(from, { replace: true });
  }
  const handleExistsLoginUser = event => {
    event.preventDefault();
    const email = useEmail.current.value;
    const password = usePassword.current.value;
    signInWithEmailAndPassword(email, password);
  };

  
  const handleResetPassword = async () => {
    const email = useEmail.current.value;
    if (email) {
      console.log(email);
      await sendPasswordResetEmail(email);
      toast("send reset email");
    } else {
      toast("please Enter your email");
    }
  };

  return (
    <div>
      <div className=" mx-auto border p-3 bg mt-5 rounded cssControl">
        <h1 className="text-center ">
          <mark className="px-4 LTitle">Login page</mark>
        </h1>
        <Form onSubmit={handleExistsLoginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-primary ">Email address</Form.Label>
            <Form.Control
            className="css"
              ref={useEmail}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-primary">Password</Form.Label>
            <Form.Control
             className="css"
              ref={usePassword}
              type="password"
              placeholder="Password"
              required
            />
            {errorElement}
          </Form.Group>
          <div className="d-flex d-md-flex">
            <Button
              className="w-25 mx-auto d-block btnColor"
              variant=""
              type="submit"
            >
              Login
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
            New User ?
            <Link className="text-decoration-none text-info ps-2" to="/signup">
              Please SignUp
            </Link>
          </p>
          <p className="">
            Forget Password ?
            <button
              onClick={() => handleResetPassword()}
              className="btn  text-primary pe-auto text-decoration-none' text-info ps-2 mt-2"
            >
              Please Reset
            </button>
          </p>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
