import React from "react";
import Banner from "../../components/banner/Banner";
import Hero from "../../components/hero/Hero";
import Info from "../../components/info/Info";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="section1">
        <Info />
      </section>
      <section className="section2">
        <Banner />
      </section>
    </div>
  );
};

export default Home;
