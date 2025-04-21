import React from "react";

const AboutPic = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[400px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="/public/Images/about.jpg"
          alt="About me"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-[500px] w-[300px] bg-Orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutPic;
