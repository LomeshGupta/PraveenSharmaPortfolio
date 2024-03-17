import React from "react";
import "./Section1.css";
import pic1 from "../../Assets/pic1.png"

const Section1 = () => {
  return (
    <section className="Section1">
      <h1 className="Title">Praveen Sharma</h1>
      <div className="ImageContainer">
        <img
          src={pic1}
          alt="Praveen Sharma"
          className="Image"
        />
      </div>
      <h2 className="Subtitle2">Assistant Professor</h2>
      <h3 className="Subtitle3">Mathematics</h3>
    </section>
  );
};

export default Section1;
