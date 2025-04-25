import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Bio from "../../components/Bio/Bio";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <>
      <Bio />
      <Banner />
    </>
  );
};

export default Home;
