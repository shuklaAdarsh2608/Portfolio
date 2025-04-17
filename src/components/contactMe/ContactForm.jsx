import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [message,setMessage] = useState("");
const [success,setSuccess] = useState("");

const handleName =(e)=>{
  setName(e.target.value)
}
const handleEmail =(e)=>{
  setEmail(e.target.value)
};
const handleMessage =(e)=>{
  setMessage(e.target.value)
};

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_66c0ens", "template_x0mm0iz", form.current, {
        publicKey: "ho3KLwfqfHN2DeCie",
      })
      .then(
        () => {
          setName("")
          setEmail("")
          setMessage("")
          setSuccess("Thanks for contacting !")
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-Cyan">{success}</p>
      <form
        className="flex flex-col gap-4 text-White"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-LightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-LightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className="rounded-lg bg-LightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-Cyan text-White h-12 font-bold text-xl hover:bg-DarkCyan bg-Cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
