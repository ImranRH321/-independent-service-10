import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.int";

const SignUp = () => {
  const useName = useRef("");
  const useEmail = useRef("");
  const usePassword = useRef("");
  const useConfirmPassword = useRef("");
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const navigate = useNavigate()

    let errorElement  
  if(error){
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }

  if (user) {
    navigate('/home')
    console.log(user);
  }
  const handleCreateUser = event => {
    event.preventDefault();
    const name = useName.current.value;
    const email = useEmail.current.value;
    const password = usePassword.current.value;
    const confirmPassword = useConfirmPassword.current.value;
    //  if(password.length < 6){
    //    alert('minimum 6 character')
    //    return;
    //  }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      alert(" password At least one special character");
      return;
    }
    if (password === confirmPassword) {  
      createUserWithEmailAndPassword(email, password)
    } else{
      alert('password and confirm password is not match ')
    }
    
  };

  return (
    <div>
      <div className="w-50 mx-auto border p-3 mt-5 rounded bg-light">
        <h1 className=" mb-4 text-center">
          <mark className="px-4   text-dark ">SignUp page</mark>
        </h1>
        <Form onSubmit={handleCreateUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-primary">Name</Form.Label>
            <Form.Control ref={useName} type="text" placeholder="Your Name" />
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
          {errorElement}
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

/* 

1.Give your website a name. The name should appear on the website and be displayed on the website's title.

2.Add One extra section on the home page in addition to the 4 sections (header, banner, services, and footer) mentioned above.Create a 404 page (not found page)

3.Clicking on the button will take the user to the Checkout route. This route will be private/protected routes. Please make sure that the private route redirects to the login page if the user is not logged in. After login, the user will be redirected to the checkout page

4.You can put anything on the checkout page. If you want to do some extra optional work, please read the optional but highly recommended section of this description.

5.If you reload the protected/private route (after login), this page will not redirect the user to the login page. Instead, it will keep the logged-in user on the protected route.

6.You Must implement Email-password based authentication. You will have to implement the Registration and the login page. Users should be able to toggle between Login and Registration view. You can use react firebase hook to implement the login system. And don't forget to make the Email and password field a required field.

7.Also, implement at least one extra login, which could be (facebook, github, google, etc).

8.Once logged in, the log out/sign out button should appear on the header, which will log out the user once clicked.

9.Add two more routes. one route will be blogs. On the blog page, you will need to answer these three questions. This won't be a protected route . and 3 question answer .

10. You will create an about me page. It could be the about route. There will put your name and your image (picture is optional. However, if you put a photo, please put a professional look picture). And write a small paragraph (3-5 lines) about your goal. And how you will work hard to achieve your goal.

11.Minimum 9 meaningful git commit


website link 

https://preview.themeforest.net/item/travele-travel-tour-agency-html5-page-template/full_screen_preview/33943830?_ga=2.242884994.1201770027.1654961059-1069577363.1651652990

-----------
https://i.ibb.co/d2Vg9Fv/travele1.jpg
https://i.ibb.co/8rLr5cz/travele2.jpg
https://i.ibb.co/wBvDkXG/travele3.jpg

  git push --set-upstream origin main
*/
