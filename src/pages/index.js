import React from "react";

import "../components/style.scss";
import Helmet from "../components/helmet";
import Header from "../components/header";
import About from "../components/about";
import Work from "../components/work";
import Projects from "../components/projects";
import Footer from "../components/footer";

const IndexPage = () => (
  <div>
    <Helmet />
    <Header />
    <About />
    <Work />
    <Projects />
    <Footer />
  </div>
);

export default IndexPage;
