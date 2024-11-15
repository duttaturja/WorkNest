import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7y3z22k", "template_009co8b", form.current, {
        publicKey: "j5EfIx2wNO3mfyqNq",
      })
      .then(
        () => {
          alert("SUCCESS!");
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h1 className="text-5xl font-semibold flex justify-center">Contact Us</h1>
      <input
        type="text"
        name="from_name"
        placeholder="Your Name:"
        className="p-2 pt-1 pb-1 mt-4 mr-4 w-10/12 rounded-md ml-12 border-black border-2 h-12 w-full"
      />
      <input
        type="email"
        name="from_email"
        placeholder="Your Email:"
        className="p-2 pt-1 pb-1 mt-4 mr-4 w-10/12 rounded-md ml-12 border-black border-2 h-12 w-full"
      />
      <textarea
        name="message"
        placeholder="Your Message:"
        className="p-2 pt-2 pb-1 mt-4 mr-4 w-10/12 rounded-md ml-12 border-black border-2 h-32 resize-none w-full"
      />
      <input
        type="submit"
        value="Send"
        className="cursor-pointer ml-12 bg-green-600 text-white border-2 border-transparent rounded-lg hover:border-2 hover:border-white p-2 w-24 h-12 mt-8 mb-4 font-lg"
      />
    </form>
  );
};
