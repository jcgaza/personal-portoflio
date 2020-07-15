import React from "react";
import { FaStar } from "react-icons/fa";

const Projects = () => (
  <section className="section" id="projects">
    <div className="container">
      <h1 className="title is-1 has-text-centered">Projects</h1>
      <article className="media">
        <figure className="media-left">
          <FaStar />
        </figure>
        <div className="media-content">
          <div class="content">
            <h2 className="title is-4 mb-2">
              Balarila: Tagalog Grammar and Spelling Checker
            </h2>
            <div className="tags mb-1">
              <span class="tag">Python</span>
              <span class="tag">Keras</span>
              <span class="tag">React</span>
              <span class="tag">Flask</span>
            </div>
            <p className="subtitle">
              Paper presented at the 2nd Information and Computing Education
              Conference, hosted by the Computing Society of the Philippines in
              Davao City, Philippines.
            </p>
            <p className="subtitle">
              Nominated for Best Special Paper (Computer Science category) at
              the 2nd Institute of Computer Science Undergraduate Symposium.
            </p>
          </div>
        </div>
      </article>
      <article className="media">
        <figure className="media-left">
          <FaStar />
        </figure>
        <div className="media-content">
          <div class="content">
            <h2 className="title is-4 mb-2">UP Rural High School Website</h2>
            <div className="tags mb-1">
              <span class="tag is-info">Under Development</span>
              <span class="tag">React</span>
              <span class="tag">Gatsby</span>
              <span class="tag">Bulma</span>
              <span class="tag">NetlifyCMS</span>
            </div>
            <p className="subtitle">
              Designed and developed the official website of the UP Rural High
              School website. It includes a blog for{" "}
              <span className="is-italic">The Ruralite</span>, the school's
              official student publication.
            </p>
          </div>
        </div>
      </article>
      <article className="media">
        <figure className="media-left">
          <FaStar />
        </figure>
        <div className="media-content">
          <div class="content">
            <h2 className="title is-4 mb-2">MutyaCodes</h2>
            <div className="tags mb-1">
              <span class="tag is-info">Under Development</span>
              <span class="tag">React</span>
              <span class="tag">Gatsby</span>
              <span class="tag">Bulma</span>
              <span class="tag">MDX</span>
            </div>
            <p className="subtitle">
              A one-stop to-go website for K-12 students to learn basic
              programming that hosts written modules, exercise workbook, and
              video lectures.
            </p>
          </div>
        </div>
      </article>
      <article className="media">
        <figure className="media-left">
          <FaStar />
        </figure>
        <div className="media-content">
          <div class="content">
            <h2 className="title is-4 mb-2">UPLB COVID-19 Testing Center</h2>
            <div className="tags mb-1">
              <span class="tag is-info">Under Development</span>
              <span class="tag">React</span>
              <span class="tag">Ant Design</span>
              <span class="tag">NodeJS</span>
              <span class="tag">Express</span>
              <span class="tag">MariaDB</span>
            </div>
            <p className="subtitle">
              Volunteered as a front-end developer for the UPLB COVID-19 Testing
              Center web portal, focused on streamlining test requests.
            </p>
          </div>
        </div>
      </article>
      <article className="media">
        <figure className="media-left">
          <FaStar />
        </figure>
        <div className="media-content">
          <div class="content">
            <h2 className="title is-4 mb-2">Special Problem-Thesis Tracker</h2>
            <div className="tags mb-1">
              <span class="tag is-warning">Under Revision</span>
              <span class="tag">React</span>
              <span class="tag">Semantic UI</span>
              <span class="tag">NodeJS</span>
              <span class="tag">Express</span>
              <span class="tag">MariaDB</span>
            </div>
            <p className="subtitle">
              A web application for the database of Special Problem and Theses,
              which includes the basic functions such as viewing and adding
              papers.
            </p>
          </div>
        </div>
      </article>
    </div>
  </section>
);

export default Projects;
