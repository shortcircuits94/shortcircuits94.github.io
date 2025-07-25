import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Home from "./Pages/HomePage/Home";
import WorkExampleDetails from "./components/WorkExamplesDetails/WorkExamplesDetails";

import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/work/:id" element={<WorkExampleDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
