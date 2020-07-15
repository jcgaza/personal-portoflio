import React from "react";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaGoogle,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaVuejs,
  FaFigma,
} from "react-icons/fa";
import { RiFlutterLine, RiUserSearchLine } from "react-icons/ri";

const About = () => (
  <section className="section is-medium">
    <div className="container">
      <div className="columns is-centered">
        <div className="column">
          <h1 className="title is-size-1 is-size-3-mobile">
            You can call me Ced.
          </h1>
          <p className="subtitle is-5">
            I graduated at the University of the Philippines Los Baños with a
            Computer Science degree. I like writing stuff—from composing
            fictional stories to translating solutions into code.
          </p>

          <div className="columns is-multiline mt-6">
            <div className="column is-one-third pr-5">
              <figure className="image center mb-4">
                <FaChalkboardTeacher size="4rem" fill="#ec9f05" />
              </figure>
              <p className="title is-5">Teacher</p>
              <p className="subtitle is-6">
                As a personal mission to encourage more kids to try programming,
                I teach introductory programming classes for K-12 education. The
                subjects I teach include:
              </p>
              <div className="proficiency-icons">
                <FaGoogle size="3rem" />
                <FaPython size="3rem" />
                <FaHtml5 size="3rem" />
                <FaCss3Alt size="3rem" />
              </div>
            </div>
            <div className="column is-one-third px-4">
              <figure className="image center mb-4">
                <FaLaptopCode size="4rem" fill="#ec9f05" />
              </figure>
              <p className="title is-5">Software Developer</p>
              <p className="subtitle is-6">
                I am a front-end web developer that has an eye for design. I am
                also starting to do some own website designs as well. I have
                used these technologies for development:
              </p>
              <div className="proficiency-icons">
                <FaReact size="3rem" />
                <RiFlutterLine size="3rem" />
                <FaVuejs size="3rem" />
                <FaFigma size="3rem" />
              </div>
            </div>
            <div className="column is-one-third pl-5">
              <figure className="image center mb-4">
                <RiUserSearchLine size="4rem" fill="#ec9f05" />
              </figure>
              <p className="title is-5">Researcher</p>
              <p className="subtitle is-6">
                I strive to become an educator focused on implementing
                technologies inside the classroom. Some of the research areas
                I'm interested at include:
                <ul className="has-text-centered mt-3">
                  <li>Ed-Tech</li>
                  <li>Data Science</li>
                  <li>Natural Language Processing</li>
                  <li>Image Processing</li>
                  <li>UI/UX Design and Web Development</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
