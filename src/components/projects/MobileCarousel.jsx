import React from "react";
import Card from "./Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MobileCarousel = ({ projectDetails }) => {
  return (
    <div className="projects__content__mobile">
      <h3 className="projects__title__mobile">
        <div className="line__before"></div>
        Projects
      </h3>
      <Carousel
        axis="horizontal"
        showStatus={false}
        showThumbs={false}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <li
              onClick={clickHandler}
              className={`ind ${isSelected ? "active__indicator" : ""}`}
              key={index}
              role="button"
            />
          );
        }}
      >
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
      </Carousel>
    </div>
  );
};

export default MobileCarousel;
