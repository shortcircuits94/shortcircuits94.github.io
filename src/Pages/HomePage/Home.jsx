import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Bio from "../../components/Bio/Bio";
import Banner from "../../components/Banner/Banner";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <>
      <Bio />
      <Banner />
      <Projects />
    </>
  );
};

export default Home;
