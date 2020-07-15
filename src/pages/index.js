import React from "react";

import "../components/style.scss";
import Helmet from "../components/helmet";
import Header from "../components/header";
import Experience from "../components/experience";
import Footer from "../components/footer";

const IndexPage = () => (
  <div>
    <Helmet />
    <Header />
    <Experience />
    <Footer />
  </div>
);

export default IndexPage;
