import React from "react";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experinence" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];
const footermain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-LightGrey mt-24"></div>
      <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-LightGrey">Adarsh Shukla</p>
        <ul className="flex gap-4 text-LightGrey text-xl">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a href="#" className="hover:text-White transition-all duration-500 cursor-pointer">{item.link}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-LightBrown">© 2025 APPYCLOUD | All rights reserved.</p>
    </div>
  );
};

export default footermain;
