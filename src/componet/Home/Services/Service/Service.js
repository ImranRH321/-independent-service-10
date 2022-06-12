import React from "react";
import { useNavigate } from "react-router-dom";
import './Service.css';

const Service = ({ service }) => {
  const { name, image, price, id } = service;

  let navigate = useNavigate();

  const handleBook = id => {
    navigate(`/services/${id}`);
  };
  return (

     <div className="col-md-4">
     <div className=" shadow border border-info rounded">
     <div className="w-100 rounded">
        <img className="w-100" src={image} alt="" />
      </div>
      <div className="text-center">
        <h3 className="mt-4">{service.name}</h3>
        <h4 className="mb-4">Price: {price}</h4>
        <button
          onClick={() => handleBook(id)}
          className="btn btn-dark w-100 mx-auto"
        >
          Books
        </button>
      </div>
     </div>
    </div>

  );
};

export default Service;
