import React from "react";
import "./projects.scss";
import Card from "./Card";
import projectDetails from "../../assets/data";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MobileCarousel from "./MobileCarousel";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Fade bottom duration={1000}>
        <div className="projects__content">
          <h3 className="projects__title">
            <div className="line__before"></div>
            Projects
          </h3>
          <div className="projects__card__grid__container">
            {projectDetails.map((project, index) => (
              <Card
                key={index}
                id={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </Fade>
      <MobileCarousel projectDetails={projectDetails} />
    </div>
  );
};

export default Projects;
