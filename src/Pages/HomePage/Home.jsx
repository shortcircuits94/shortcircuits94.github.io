import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Bio from "../../components/Bio/Bio";
import Banner from "../../components/Banner/Banner";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import WorkExamples from "../../components/WorkExamples/WorkExamples";

const Home = () => {
  return (
    <>
      <Bio />
      <Banner />
      <About />
      <Projects />
      <WorkExamples />
    </>
  );
};

export default Home;
