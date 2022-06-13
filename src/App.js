import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./componet/Home/About/About";
import Blogs from "./componet/Home/Blogs/Blogs";
import Home from "./componet/Home/Home/Home";
import ServiceDetails from "./componet/Home/Services/ServiceDetails/ServiceDetails";
import Services from "./componet/Home/Services/Services/Services";
import Footer from "./componet/shared/Footer/Footer";
import Header from "./componet/shared/Header/Header";
import Login from "./componet/shared/Login/Login";
import NotFound from "./componet/shared/NotFound/NotFound";
import RequireAuth from "./componet/shared/RequireAuth/RequireAuth";
import SignUp from "./componet/shared/SignUp/SignUp";
import './app.css'
import Checkout from "./componet/Home/Services/Checkout/Checkout";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="services/:bookId"
          element={
            <RequireAuth>
              <ServiceDetails></ServiceDetails>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}>Login</Route>
        <Route path="/signup" element={<SignUp></SignUp>}>SignUp</Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
         <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
