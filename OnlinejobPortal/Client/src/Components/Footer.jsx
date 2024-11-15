import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-600 text-neutral-content text-white grid grid-cols-3 gap-4">
      <aside className="flex items-center justify-center col-span-2">
        <Link to="/">
          <img src="../src/assets/logo.png" />
        </Link>
        <div>
          <h2 className="text-5xl mt-16">WorkNest Private Limited.</h2>
          <p className="text-2xl mt-4">
            Providing jobs and candidates since 2018.
            <br />
            <p className="text-sm">Copyright © 2024 - All rights reserved</p>
          </p>
        </div>
      </aside>
      <div className="bg-gray-300 text-black grid grid-cols-2 border-t rounded-lg">
        <div className="text-4xl ml-8 mt-16">
          Developed by
          <br />
          Turja Dutta
          <h6 className="footer-title flex justify-center align-center mt-4 text-lg">
            Follow me on my Socials
          </h6>
        </div>
        <div className="flex justify-center mt-8">
          <img
            src="./src/assets/dev.jpg"
            className="border-0 rounded-full w-10/12 border-4 border-transparent hover:border-white hover:shadow-md"
          />
        </div>
        <div className="grid grid-cols-3 gap-2 p-6 col-span-2">
          <a
            href="https://www.facebook.com/turja.dutta.313/"
            className="flex justify-center"
          >
            <FaFacebook size={28} />
            <span className="pl-2 pt-1">Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/duttaturja/"
            className="flex justify-center"
          >
            <FaInstagram size={28} />
            <span className="pl-2 pt-1">Instagram</span>
          </a>
          <a
            href="https://github.com/duttaturja"
            className="flex justify-center"
          >
            <FaGithub size={28} />
            <span className="pl-2 pt-1">Github</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
