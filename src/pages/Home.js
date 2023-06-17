import React from "react";
import Banner from "../Components/static/Home/banner/Banner";
import About from "../Components/static/Home/about/About";
import Certificate from "../Components/static/Home/certificates/Certificate";
import Cta from "../Components/static/Home/callToAction/Cta";
import Cards from "../Components/static/Home/cards/Cards";

function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Certificate />
      <Cta />
      <Cards />
    </div>
  );
}

export default Home;
