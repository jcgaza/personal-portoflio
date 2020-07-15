import React from "react";

import "./style.scss";

import Navbar from "./navbar";

const Header = ({ siteTitle }) => (
  <section className="hero gradient-bg is-fullheight">
    <Navbar />
    <div className="hero-body">
      <div className="container center">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <h1 className="title is-1 has-text-white">Kumusta! I'm Ced.</h1>
              <p className="subtitle is-1 is-italic has-text-white">
                I write code and fiction.
              </p>
              <p className="subtitle is-4 has-text-white">
                I'm a teacher, a software developer, and a researcher.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Header;
