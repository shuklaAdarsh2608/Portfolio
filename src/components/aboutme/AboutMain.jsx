import React from "react";
import AboutText from "./AboutText";
import AboutPic from "./AboutPic";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/frameMotion";

const AboutMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      <motion.div
        variants={fadeIn("right", 0.25)} // ✅ Correct usage
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.4)} // ✅ Correct usage
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutPic />
      </motion.div>
    </div>
  );
};

export default AboutMain;
