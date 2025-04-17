import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/frameMotion";



const SingleProject = ({ name, year, align, image, link }) => {
  return (
    <motion.div
    variants={fadeIn("up", 0.25)}  // ✅ Correct usage
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.5 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end`}
    >
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-Orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-White font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {year}
        </h2>

        {/* View Button */}
        <div
          className={`flex sm:justify-center ${
            align === "left" ? "md:justify-end" : "md:justify-start"
          }`}
        >
          <a
            href={link}
            className="text-lg flex gap-2 items-center text-Cyan hover:text-Orange transition-all duration-500 cursor-pointer"
          >
            View
            <BiSolidRightTopArrowCircle />
          </a>
        </div>
      </div>

      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-White">
        <div className="w-full h-full bg-Cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="Error" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
