import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px] ">
      <p className="text-Orange font-bold uppercase text-3xl font-special text-center">Since 2024</p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Years"/>
        <p className="font-bold text-6xl text-LightBrown">-</p>
        <ExperienceInfo number="10" text="Websites" />
      </div>
      <p className="text-center text-White">Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
      <ExperienceInfo number="$50K" text="Max Budget"/>
    </div>
  );
};

export default ExperienceTopLeft;
