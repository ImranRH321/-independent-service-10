import React from "react";

const About = () => {
  const myself =
    "https://i.ibb.co/frhDHz6/IMG-164308271536-F-removebg-preview-1-modified.png";

  return (
    <div className="my-4">
      <h3 className="bg-dark text-white ms-3 p-2 w-50 LTitle my-4">
        About us for me <mark className="text-success LTitle ">Imran Rx</mark>
      </h3>
      <div className="row container">
        <div className="col-md-6 col-sm-12">
          <div>
            <img className="" src={myself} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <p>
           MY Target is Goal Facebook , Google Job 
           Waiting .....
          </p>
          <p>
            <small>
              Ei bisoy tar opar kico feedbreak diyen vai..
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
