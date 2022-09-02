import React from "react";
import "./info.scss";

const InfoCard = (props) => {
  return (
    <div className="cards">
      <img src={props.image} alt="" />
      <h3>{props.heading}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default InfoCard;
