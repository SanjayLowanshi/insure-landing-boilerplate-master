import React from "react";
import "./info.scss";
import { images } from "../../images";
import InfoCard from "./InfoCard";
const Info = () => {
  return (
    <div>
      <div className="we-are-different">
        <div className="container">
          <h2 className="title1 title1--mod">We are Different..</h2>
          <div className="we-are-different__content">
            <InfoCard
              image={images.people_first}
              heading="People First"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi, quis recusandae autem odio perspiciatis."
            />
            <InfoCard
              image={images.affordable_prices}
              heading="Affordable Prices"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi, quis recusandae autem odio perspiciatis."
            />
            <InfoCard
              image={images.snappy_process}
              heading="Snappy Process"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat animi, quis recusandae autem odio perspiciatis."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
