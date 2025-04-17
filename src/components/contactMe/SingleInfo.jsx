import React from "react";

const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex  gap-4 items-center">
      <Image className="text-3xl " />
      <p className="text-base text-White">{text}</p>
    </div>
  );
};

export default SingleInfo;
