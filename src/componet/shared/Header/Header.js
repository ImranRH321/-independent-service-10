import { signOut } from "firebase/auth";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.int";

const Header = () => {
  const [user] = useAuthState(auth);
  const logOutButton = () => {
    signOut(auth)
  }
  // console.log(user?.name);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark"  sticky="top"  variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            TraveL
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              {user? (
              <div>  
              <button onClick={()=>logOutButton()}>signOut</button>
              </div>
              ) : (
                <div className=''>
                  <Nav.Link as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/signup">
                    SignUP
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
