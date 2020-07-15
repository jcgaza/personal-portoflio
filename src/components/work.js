import React from "react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => (
  <section className="section is-primary" id="work">
    <div className="container">
      <div className="center mb-3">
        <FaBriefcase size="5rem" fill="white" />
      </div>
      <h1 className="title is-1 has-text-centered">Work Experience</h1>
      <div className="columns is-multiline">
        <div className="column is-half">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">
                Information Technology Instructor
              </p>
            </div>
            <div className="card-content">
              <p className="is-italic">UP Rural High School, UPLB</p>
              <p className="is-italic">September 2019 - Present</p>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">Software Developer</p>
            </div>
            <div className="card-content">
              <p className="is-italic">Futurity Learning</p>
              <p className="is-italic">February 2019 - March 2020</p>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">Student Assistant</p>
            </div>
            <div className="card-content">
              <p className="is-italic">
                InfoTRU, College of Development Communication, UPLB
              </p>
              <p className="is-italic">February 2019 - May 2019</p>
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">Software Development Intern</p>
            </div>
            <div className="card-content">
              <p className="is-italic">Azeus Systems Limited, Philippines</p>
              <p className="is-italic">June 2018 - July 2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
