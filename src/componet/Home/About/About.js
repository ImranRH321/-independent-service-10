import React from "react";

const About = () => {
  const myself =
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80";

  return (
    <div className="my-4">
      <div className="row container">
        <div className="col-md-6 col-sm-12">
          <div>
            <img className="" src={myself} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quis, nihil voluptatem expedita, voluptatum, sed magni consequuntur perferendis quod ab recusandae consequatur. Voluptatibus, soluta. Modi eligendi, nam repudiandae libero veritatis nisi accusamus nulla veniam exercitationem possimus laboriosam dignissimos culpa tempore maiores voluptas harum. Expedita aperiam dolorem in amet repudiandae unde!
        </div>
      </div>
    </div>
  );
};

export default About;
