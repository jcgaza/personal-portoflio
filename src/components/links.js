import React from "react";
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";

const Links = ({ center = false }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            github
            email
            linkedin
          }
        }
      }
    `}
    render={(data) => (
      <article
        className={`media my-4 is-borderless ${center ? "center" : ""}`.trim()}
      >
        <a
          className="button mx-4 button-icon"
          href={data.site.siteMetadata.github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size="20px" />
        </a>
        <a
          className="button mx-4 button-icon"
          href={data.site.siteMetadata.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn size="20px" />
        </a>
        <a
          className="button mx-4 button-icon"
          href={`mailto:${data.site.siteMetadata.email}`}
          target="_blank"
          rel="noreferrer"
        >
          <FaRegEnvelope size="20px" />
        </a>
      </article>
    )}
  />
);

export default Links;
