import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        Link="https://github.com/shuklaAdarsh2608"
        Icon={FiGithub}
      />
      <SingleContactSocial
        Link="https://www.linkedin.com/in/adarsh-shukla-777601265/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        Link="https://www.linkedin.com/in/adarsh-shukla-777601265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        Icon={FaInstagram}
      />
    </div>
  );
};

export default ContactSocial;
