import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.png";
import abtimg from "../assets/about1.jpg";
import { ContactUs } from "../Components/ContactUs";

const Home = () => {
  return (
    <div className="bg-secondary-100 ">
      <div className="bg-cover bg-center bg-[url('../src/assets/homepage1.jpg')] h-11/12 w-full opacity-90 ">
        <div className="text-9xl font-bold pt-48 pl-16 text-black flex">
          Work<h1 className="text-yellow-200">Nest</h1>
        </div>
        <div className="text-3xl font-semibold pl-16 pt-4 pb-4 text-green-100">
          Get Your Dream Jobs or Suitable Candidates
        </div>
        <p className="text-lg font-semibold pl-16 text-green-100">
          Providing Jobs and Candidates since 2018
        </p>
        <Link to="/login">
          <button
            type="button"
            className="bg-primary-200 mb-24 text-white p-3 rounded-lg ml-16 mt-6 border-2 border-transparent hover:bg-gray-600 hover:border-2 hover:border-white"
          >
            Get Started
          </button>
        </Link>
      </div>
      <div className="bg-cover bg-center bg-gradient-to-b from-secondary-100 to-primary-100 pb-16">
        <h1 className="text-6xl font-medium mt-12 ml-16 p-4">
          Trusted By Leading <br />
          Companies
        </h1>
        <h2 className="font-medium text-2xl mt-4 ml-16 mb-8 p-4">
          Top businesses in Bangladesh rely on WorkNest to find their ideal
          candidates
        </h2>
        <Marquee
          className="bg-white justify-center width-11/12"
          direction="right"
          play={true}
          pauseOnClick={true}
        >
          <div className="ml-16 w-4/5">
            <img src={img1} />
          </div>
          <div className="ml-16 w-4/5">
            <img src={img2} />
          </div>
          <div className="ml-16 w-4/5">
            <img src={img3} />
          </div>
          <div className="ml-16 w-4/5">
            <img src={img4} />
          </div>
          <div className="ml-16 w-4/5">
            <img src={img5} />
          </div>
          <div className="ml-16 w-4/5">
            <img src={img6} />
          </div>
          <div className="ml-16 w-4/5">
            <img src={img7} />
          </div>
          <div className="ml-16 w-4/5">
            <img src={img8} />
          </div>
          <div className="ml-16 w-4/5">
            <img src={img9} />
          </div>
          <div className="ml-16 w-4/5">
            <img src={img10} />
          </div>
          <div className="ml-16 w-4/5">
            <img src={img11} />
          </div>
        </Marquee>
      </div>

      {/* //cards// */}

      <div className="bg-secondary-100 grid grid-cols-2 px-24 mt-12 pb-12">
        <img
          src={abtimg}
          className="h-full w-11/12 border-2 border-transparent rounded-lg"
        />
        <div className="text-black">
          <h1 className="text-5xl font-medium mb-6">About us</h1>
          <h2 className="text-lg font-sm ml-8">
            Welcome to WorkNest your reliable website for jobs. We know job
            hunting is tough, so is finding the ideal candidate for your job.
            But hey! we're here to help. Whether it's your first job or a career
            change, our platform offers you the tools to find the right fit
            whether you're searching for a job or trying to recruit someone
            suitable for any position. <br />
            <br />
            Let's work together to make your search easier and more successful.
            Our services include job posting for the recruiters, job
            applications, interview calls, industry news, job related blogs etc.
          </h2>
          <Link to="/about">
            <button
              type="button"
              className="bg-mid-mid mb-24 text-white p-3 rounded-lg ml-16 mt-6 border-2 border-transparent hover:bg-gray-300 hover:border-2 hover:border-black hover:text-black"
            >
              Learn more
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-cover bg-center bg-[url('../src/assets/contactus.jpg')] grid grid-cols-2 px-24 pt-12 opacity-80">
        <div className="text-white pt-20">
          <h1 className="text-6xl font-semibold mb-6">Need help?</h1>
          <h2 className="text-lg font-medium">
            Having any trouble or have any questions? Reach out to us with this
            form. We're here to assist you with everything you need.
          </h2>
        </div>
        <div className="flex justify-center mt-20">
          <ContactUs />
        </div>
      </div>
      {/*//location// */}
    </div>
  );
};

export default Home;
