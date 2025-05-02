import React from "react";
import { PiSquareThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/frameMotion";

const HomePic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.25)} // ✅ Correct usage
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="src/assets/images/Addy.png"
        alt="Adarsh Shukla"
        className="max-h-[260px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiSquareThin className="md:h-[90%] sm:h-[120%] min-h-[400px] w-auto text-Cyan blur-md animate-slow-spin" />
      </div>
    </motion.div>
  );
};

export default HomePic;
