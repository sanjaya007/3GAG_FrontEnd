import React from "react";
import "../../css/home.css";
import HomeBanner from "../inner-components/home/HomeBanner";
import HomeFront from "../inner-components/home/HomeFront";
import TrendingProducts from "../inner-components/home/TrendingProducts";
import Footer from "../Footer";
import Banner from "../Banner";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeFront />
      <Banner />
      <TrendingProducts />
      <Footer />
    </>
  );
};

export default Home;
