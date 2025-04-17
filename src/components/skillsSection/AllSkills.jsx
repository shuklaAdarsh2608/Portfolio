import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import SingleSkills from "./SingleSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/frameMotion";


const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JAVASCRIPT",
    icon: IoLogoJavascript,
  },
  {
    skill: "REACT",
    icon: FaReact,
  },
  {
    skill: "NODE",
    icon: FaNodeJs,
  },
  {
    skill: "PHP",
    icon: FaPhp,
  },
  {
    skill: "MYSQL",
    icon: GrMysql,
  },
];
const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto ">
        {skills.map((item, index) => {
          return (
            <motion.div
            variants={fadeIn("up", `0.${index}`)}  // ✅ Correct usage
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            >
              <SingleSkills key={index} text={item.skill} imgSvg={<item.icon />} />

            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
