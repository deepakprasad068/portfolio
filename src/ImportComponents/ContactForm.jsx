import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import SimpleAlert from "./Alert";

export const ContactUs = () => {
  const form = useRef();
  const [alertopen, setalertopen] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6sfa7ss", "template_f6rjfl9", form.current, {
        publicKey: "D5yS0Ti_jilOfsjlF",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          emailsent();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  function emailsent() {
    setalertopen(true);
    setTimeout(() => {
      setalertopen(false);
    }, 4000);
  }

  return (
    <>
      {alertopen ? <SimpleAlert message={"Email has been sent.."} /> : null}
      <form ref={form} onSubmit={sendEmail} className="Form">
        <label className="item">Name</label>
        <input className="item" type="text" name="from_name" />
        <label className="item">Email</label>
        <input className="item" type="email" name="from_email" />
        <label className="item">Message</label>
        <textarea className="item" name="message" style={{ padding: "20px" }} />
        <input className="item btn " type="submit" value="Send" />
      </form>
    </>
  );
};
