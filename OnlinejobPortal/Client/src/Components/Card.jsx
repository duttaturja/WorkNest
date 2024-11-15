import React from "react";
import {
  FaBangladeshiTakaSign,
  FaCalendarDay,
  FaClockRotateLeft,
  FaLocationDot,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ job }) => {
  const {
    _id,
    title,
    company,
    location,
    jobtype,
    workplacetype,
    responsibities,
    requirements,
    qualifications,
    minsalary,
    maxsalary,
    deadline,
    overview,
    benefits,
    companyim,
  } = job;
  return (
    <section className="bg-gray-700 rounded-md mx-2 my-3">
      <div className="flex flex-cols md:flex-rows gap-4 items-start bg-gray-400 text-black/70 m-4 rounded-md">
        <img src={companyim} className="my-4"/>
        <h4 className="text-black mb-1">{company}</h4>
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="text-black/70 text-base flex flex-wrap gap-2 mb-2">
          <span className="flex items-center gap-2">
            <FaLocationDot /> {location}
          </span>
          <span className="flex items-center gap-2">
            <FaClockRotateLeft /> {jobtype}
          </span>
          <span className="flex items-center gap-2">
            <FaBangladeshiTakaSign /> {minsalary}-{maxsalary}K
          </span>
          <span className="flex items-center gap-2">
            <FaCalendarDay /> {deadline}
          </span>
        </div>
      </div>
      <Link to={`/details/${_id}`}><button type="button" className="text-black bg-white p-2 ml-96 mb-3 rounded-lg">
        Details
      </button></Link>
    </section>
  );
};

export default Card;
