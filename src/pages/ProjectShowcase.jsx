import React from "react";
import ProjectCard from "../components/ProjectCard"; 
import projects from "../lib/projects"; 

const ProjectShowcase = () => {
  return (
    <section
      className="py-12 px-4 w-[90%] mx-auto rounded-[40px] bg-cover bg-center mb-[100px]"
      style={{ backgroundImage: "url('./src/assets/Banner.jpeg')" }}
      id="project"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-[50px] mt-[50px]">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white text-center sm:text-left">
            My <span className="text-primary-color">Project</span>
          </h2>
          <button className="mt-4 sm:mt-0 px-[40px] py-[15px] font-semibold bg-primary-color text-white rounded-full hover:bg-secondary-color transition-colors">
            See All
          </button>
        </div>
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>

  );
};

export default ProjectShowcase;
