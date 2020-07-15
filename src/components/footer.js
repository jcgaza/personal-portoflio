import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaRegEnvelope,
  FaRegCopyright,
} from "react-icons/fa";
import "./style.scss";

const Footer = () => (
  <footer className="footer center gradient-bg">
    <div className="content has-text-centered">
      <p className="is-size-6 has-text-white center">
        <FaRegCopyright size="16px" />
        <span className="ml-4">jcgaza, 2020</span>
      </p>
      <article className="media center my-4">
        <a
          className="button mx-4 button-icon"
          href="https://github.com/jcgaza"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size="20px" />
        </a>
        <a
          className="button mx-4 button-icon"
          href="https://github.com/jcgaza"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size="20px" />
        </a>
        <a
          className="button mx-4 button-icon"
          href="https://github.com/jcgaza"
          target="_blank"
          rel="noreferrer"
        >
          <FaRegEnvelope size="20px" />
        </a>
      </article>
      <a href="https://bulma.io">
        <img
          src="https://bulma.io/images/made-with-bulma--white.png"
          alt="Made with Bulma"
          width="163"
          height="31"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
