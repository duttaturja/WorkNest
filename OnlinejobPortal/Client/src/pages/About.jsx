import React from "react";
import { FaComputer, FaFileCircleCheck, FaPenToSquare, FaPerson } from "react-icons/fa6";
import about from "../assets/about.jpg"
import faq from "../assets/faq.jpg"
import Slider from "../Components/Slider";
import FAQ from "../Components/FAQ";

const About = () => {
  return (<div className="bg-white">
    <div className="grid grid-cols-3 py-3 gap-2">
      <div className="bg-gray-300 ml-4">
        <img src={about} className="p-6 h-72 w-full border-2 border-transparent rounded-lg" />
      </div>
      <div className="bg-gray-300 h-72 mr-4 py-3 col-span-2 flex justify-center grid grid-rows-4">
        <h1 className="text-4xl font-medium flex justify-self-center">About Us</h1>
      <div className="grid grid-cols-4 row-span-3">
        <div className="bg-gray-500 rounded-lg p-3 m-5 grid grid-rows-3">
          <FaPerson size={28}/> <h1>100+</h1> <h1>Daily Users</h1>
        </div>
        <div className="bg-gray-500 rounded-lg p-3 m-5 grid grid-rows-3">
          <FaComputer size={28}/> <h1>20+</h1> <h1>Partnered Companies</h1>
        </div><div className="bg-gray-500 rounded-lg p-3 m-5 grid grid-rows-3">
          <FaFileCircleCheck size={28}/> <h1>120+</h1> <h1>Jobs Vacant Currently</h1>
        </div>
        <div className="bg-gray-500 rounded-lg p-3 m-5 grid grid-rows-3">
          <FaPenToSquare size={28}/> <h1>9+</h1> <h1>New Blogs</h1>
        </div>
      </div>
      </div>
    </div>
    <div>
      <h1 className="text-4xl font-semibold flex justify-center">Testimonials</h1>
      <Slider />
    </div>
    <div className="grid grid-cols-4 bg-gray-300">
      <h1 className="col-span-4 text-4xl font-semibold flex justify-center mt-4">Frequently Asked Questions</h1>
      <div>
        <img src={faq} className="p-6 h-auto w-full border-2 border-transparent rounded-lg" />
      </div>
      <div className="col-span-3 p-6 my-16">
        <FAQ />
      </div>
    </div>
  </div>);
};

export default About;
