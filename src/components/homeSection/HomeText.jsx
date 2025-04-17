import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/frameMotion";

const HomeText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.25)} // ✅ Correct usage
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="lg:text-2xl sm:text-xl uppercase text-Cyan"
      >
        FULL STACK DEVELOPER
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-Orange"
      >
        ADARSH SHUKLA
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="text-lg mt-4 text-White"
      >
        Motivated recent graduate passionate about computer applications, <br />eager
        to contribute to a dynamic team. <br />Equipped with project experience and a
        strong academic background, <br />with a drive to learn, grow, and build
        innovative tech solutions.
      </motion.p>
    </div>
  );
};

export default HomeText;
