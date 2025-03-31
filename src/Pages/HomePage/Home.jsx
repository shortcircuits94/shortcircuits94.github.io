import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Bio from "../../components/Bio/Bio";

const Home = () => {
  return (
    <>
      <Bio />
    </>
  );
};

export default Home;
