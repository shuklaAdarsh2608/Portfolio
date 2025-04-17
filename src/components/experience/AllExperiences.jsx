import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/frameMotion";

const experiences = [
  {
    job: "Front-End Developer",
    company: "RR Multisales",
    date: "2023 - 2024",
    responsibilities: [
      "Implementing UI",
      "Participating in large-scale applications",
      "Generating new ideas for better user experience",
    ],
  },
  {
    job: "Front-End Developer",
    company: "RR Multisales",
    date: "2023 - 2024",
    responsibilities: [
      "Implementing UI",
      "Participating in large-scale applications",
      "Generating new ideas for better user experience",
    ],
  },
  {
    job: "Front-End Developer",
    company: "RR Multisales",
    date: "2023 - 2024",
    responsibilities: [
      "Implementing UI",
      "Participating in large-scale applications",
      "Generating new ideas for better user experience",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-center gap-6">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <div>
            <SingleExperience experience={experience} />
          </div>
          {index < experiences.length - 1 && (
            <motion.div
            variants={fadeIn("right", 0.25)}  // ✅ Correct usage
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            >
              <FaArrowRight className="text-6xl text-Orange lg:block sm:hidden" />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default AllExperiences;
