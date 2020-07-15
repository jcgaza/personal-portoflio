import React from "react";
import { FaTwitter, FaGithub, FaMedium } from "react-icons/fa";
import "./style.scss";

const Footer = () => (
  <footer className="footer center has-background-light">
    <div className="content has-text-centered">
      <p className="is-size-4">
        This website was handcrafted with plenty cups of
      </p>
      <p className="is-size-4">By Aman Mittal (@amanhimself) using </p>
      <article className="media center">
        <span className="icon">
          <FaTwitter size="fa-2x" color="blue" />
        </span>
        <span className="icon">
          <FaGithub size="fa-2x" color="black" />
        </span>
        &nbsp;
        <span className="icon">
          <FaMedium size="fa-2x" color="green" />
        </span>
      </article>
      <p className="is-size-5">
        You can also back or support this project for me to keep it updated by{" "}
        <a href="https://www.paypal.me/amanhimself/2">Buying Me a Coffee</a>
      </p>
    </div>
  </footer>
);

export default Footer;
