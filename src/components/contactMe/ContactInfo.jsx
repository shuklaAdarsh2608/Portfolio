import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';
const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-White">
      <SingleInfo text="adarshshukla2608@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 9792184584" Image={FiPhone} />
      <SingleInfo text="Sangipur Pratapgarh" Image={IoLocationOutline} />
    </div>
  )
}

export default ContactInfo
