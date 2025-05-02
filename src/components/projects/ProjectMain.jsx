import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/frameMotion";



const projects = [
  {
    name: "Hospital Management System",
    year: "2023",
    align: "right",
    image: "src\assets\images\img1.jpg",
    link: "#",
  },
  {
    name: "Tour and Travels ",
    year: "2023",
    align: "left",
    image: "src\assets\images\img2.jpg",
    link: "#",
  },
  {
    name: "LUDO Game",
    year: "2023",
    align: "right",
    image: "src\assets\images\img3.jpg",
    link: "#",
  },
  {
    name: "Hospital Management System",
    year: "2023",
    align: "left",
    image: "src\assets\images\img4.jpg",
    link: "#",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 ">
      <motion.div
       variants={fadeIn("up", 0.25)}  // ✅ Correct usage
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.5 }}
      >

      <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
