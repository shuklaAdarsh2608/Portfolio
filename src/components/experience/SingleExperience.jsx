import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/frameMotion";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.25)} // ✅ Correct usage
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="md:h-auto md:w-[240px] sm:h-auto sm:w-full border-2 border-Orange border-dashed rounded-2xl mt-12 p-4"
    >
      <p className="font-bold text-Cyan">{experience.job}</p>
      <p className="text-Orange">{experience.company}</p>
      <p className="text-LightGrey">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-White ">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp} </li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
