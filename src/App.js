import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./componet/Home/About/About";
import Home from "./componet/Home/Home/Home";
import ServiceDetails from "./componet/Home/Services/ServiceDetails/ServiceDetails";
import Services from "./componet/Home/Services/Services/Services";
import Header from "./componet/shared/Header/Header";
import NotFound from "./componet/shared/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path='services/:bookId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
};

export default App;
