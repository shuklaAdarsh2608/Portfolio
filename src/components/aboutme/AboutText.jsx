import React from "react";

const AboutText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-centre">
      <h2 className="text-6xl text-Cyan mb-10">About Me</h2>
      <p className="text-White text-justify">
        Enthusiastic recent graduate with a fervent passion for computer
        applications, <br />
        aiming to secure a challenging and engaging position within a
        forward-thinking organization. <br />
        Eager to leverage my solid educational background, hands-on project
        experience,
        <br /> and innovative mindset to contribute effectively to a dynamic
        team. Aspire to continuously learn <br />
        and grow while actively participating in the creation of cutting-edge
        solutions that drive excellence in the field.
      </p>
      <button className="border border-Orange rounded-full py-2 px-4 text-lg flex items-centre mt-10 hover:bg-Orange transition-all duration-500 cursor-pointer md:self-start sm:self-start text-White hover:text-Cyan">
        My Projects
      </button>
    </div>
  );
};

export default AboutText;
