import React from "react";

import "../components/style.scss";
import Helmet from "../components/helmet";
import Header from "../components/header";
import About from "../components/about";
import Experience from "../components/experience";
import Footer from "../components/footer";

const IndexPage = () => (
  <div>
    <Helmet />
    <Header />
    <About />
    <Experience />
    <About />
    <Footer />
  </div>
);

export default IndexPage;
