import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  const listener = (e) => {
    setScrollY(-document.body.getBoundingClientRect().top);
  };

  useEffect(() => {
    setScrollY(document.body.getBoundingClientRect().top);
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  const onBurgerClick = (e) => {
    e.preventDefault();
    document.querySelector(".navbar-menu").classList.toggle("is-active");
    document.querySelector(".navbar-burger").classList.toggle("is-active");
  };

  return (
    <div className="hero-head">
      <nav
        id="navbar"
        className={`navbar is-fixed-top ${
          scrollY > 0 ? "navbar-color" : ""
        }`.trim()}
      >
        <div className="container">
          <div className="navbar-brand">
            <AnchorLink href="#home" className="navbar-item">
              John Cedric Gaza
            </AnchorLink>
            <a
              href="# "
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              onClick={onBurgerClick}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <AnchorLink offset={64} href="#about" className="navbar-item">
                About
              </AnchorLink>
              <AnchorLink offset={64} href="#work" className="navbar-item">
                Work
              </AnchorLink>
              <AnchorLink offset={64} href="#projects" className="navbar-item">
                Projects
              </AnchorLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
