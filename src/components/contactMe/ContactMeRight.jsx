import React from "react";
import ContactInnfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="src\assets\images\img4.jpg"
        alt="Contact"
        className="max-w-[300px]"
      />
      <ContactInnfo/>
      <ContactSocial/>
    </div>
  );
};

export default ContactMeRight;
