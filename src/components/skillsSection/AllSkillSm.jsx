import React from 'react'
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
const AllSkillSm = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
        {skills.map((item, index)=>{
            return <motion.div 
            variants={fadeIn("up", 0.25)}  // ✅ Correct usage
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            
            key={index} className="flex flex-col items-center">
                <item.icon className="text-7xl text-Orange" />
                <p className="text-center mt-4">{item.skill}</p>
            </motion.div>
        })}
      
    </div>
  )
}

export default AllSkillSm
