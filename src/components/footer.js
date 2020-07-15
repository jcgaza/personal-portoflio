import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import Links from "./links";

const Footer = () => (
  <footer className="footer center gradient-bg">
    <div className="content has-text-centered">
      <p className="is-size-6 has-text-white center">
        <FaRegCopyright size="16px" />
        <span className="ml-4">jcgaza, 2020</span>
      </p>
      <Links center />
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
