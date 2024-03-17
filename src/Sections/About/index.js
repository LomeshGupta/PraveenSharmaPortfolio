import React from "react";
import "./Section.css";
import pic2 from "../../Assets/pic2.jpg";
import pic3 from "../../Assets/svsu.jpg";

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
      <div className="section-container">
        <div className="text-container2">
          <h3 className="subtitle">
            I'm an Assistant Professor of Mathematics at Shri Vishwakarma Skill
            University in Haryana. My present focus lies in the realm of
            nonlinear partial differential equations. I'm actively seeking
            further opportunities to delve deeper into this domain and explore
            its applications across various fields.
          </h3>
        </div>
        <div className="image-container2">
          <img className="image2" src={pic3} alt="Praveen Sharma" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
