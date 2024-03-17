import React from "react";
import "./Section.css";
import pic2 from "../../Assets/pic2.jpg";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="section-container">
        <div className="text-container">
          <h1 className="title">A Little About Me</h1>
        </div>
        <div className="image-container">
          <img className="image" src={pic2} alt="Praveen Sharma" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
