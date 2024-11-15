import React, { useEffect, useState } from "react";
import useAllJobs from "../Hooks/useAllJobs";
import { FaArrowLeftLong, FaArrowRightLong, FaSistrix } from "react-icons/fa6";
import axios from "axios";
import Card from "../Components/Card";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/post").then((res) => setJobs(res.data));
  }, []);
  

  const handleSearch = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("title");
    

    const titleFilter = jobs.filter(
      (el) => el.title == name//.tolowerCase()
    );
    setJobs(titleFilter);
  };
  
  const handleFilter = (e) =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const loc = form.get("location");
    const exp = form.get("experience");
    const minval = form.get("minsalary");
    const maxval = form.get("maxsalary");
    const quality = form.get("qualifications");
    const jobtype = form.get("jobtype");
    const remotework = form.get("workplacetype");

    
      
  }
  return (
    <div className="bg-mid-mid text-white p-2 h-full">
      <div className="flex">
        {/* <button
          onClick={toggleDrawer}
          className="p-4 bg-transparent flex text-white cursor-default"
        >
          <FaArrowLeftLong size={28} className="cursor-pointer" />
          <h1 className="ml-3 text-2xl">Filter</h1>
        </button>
        <div
          className={`fixed top-0 left-0 h-full bg-secondary-100 text-black w-72 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <h1 className="text-3xl m-4 text-bold flex justify-center">Filter</h1>
          <button onClick={toggleDrawer} className="p-4 flex cursor-default">
            <h1 className="mr-2 ml-36 text-lg">Close</h1>
            <FaArrowRightLong size={28} className="cursor-pointer" />
          </button>
          <div className="text-black">
            <form onSubmit={handleFilter}>
              <label
                htmlFor="location"
                className="block font-semibold ml-2 mt-4 "
              >
                Location:
                <input type="text" name="location" className="ml-6 pl-2 pr-1" />
              </label>
              <label
                htmlFor="salary"
                className="block font-semibold ml-2 mt-4 "
              >
                Salary Range:
                <input
                  type="number"
                  className="ml-6 pl-2 pr-1 mb-3"
                  name="minsalary"
                  placeholder="Minimum"
                />
                <input
                  type="number"
                  className="ml-6 pl-2 pr-1"
                  name="maxsalary"
                  placeholder="Maximum"
                />
              </label>
              <label
                htmlFor="experience"
                className="block font-semibold ml-2 mt-4 "
              >
                Experience:
                <input
                  type="text"
                  className="ml-6 pl-2 pr-1"
                  name="experience"
                />
              </label>
              <label
                htmlFor="qualification"
                className="block font-semibold ml-2 mt-4 "
              >
                Qualifications:
                <input
                  type="text"
                  className="ml-6 pl-2 pr-1"
                  name="qualifications"
                />
              </label>
              <label
                htmlFor="jobtype"
                className="block font-semibold ml-2 mt-4 "
              >
                Job type:
                <br />
                <select
                  name="jobtype"
                  id="jobtype"
                  className="bg-white p-1 ml-6"
                >
                  <option value="" disabled selected>
                    Pick your job type
                  </option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </label>
              <label
                htmlFor="remotework"
                className="block font-semibold ml-2 mt-4"
              >
                <br />
                <select
                  name="workplacetype"
                  id="jobtype"
                  className="bg-white p-1 ml-6"
                >
                  <option value="" disabled selected>
                    Remote Work?
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </label>
               <input type="submit" value="Submit" /> 
            </form>
          </div>
        </div>
       */}
        <div className="flex ml-48 text-white grid grid-cols-12 gap-0 bg-primary-200 h-12 w-7/12 rounded-lg mt-4">
          <FaSistrix size={28} className="m-3" />
          <form onSubmit={handleSearch} className="bg-white flex rounded-lg text-black w-full col-span-11 h-12 ">
            <input type="text" name="title" className="w-full text-black pl-3 h-12" />
            <input type="submit" value="Submit" className="bg-primary-100 text-black pr-2 pl-2 h-12 rounded-r-lg"/>       
          </form>
        </div>
      </div>
      <div className="bg-gray-300 grid grid-cols-3 my-6 p-1">
        { jobs == "" ? (
          <div className="text-3xl text-black flex justify-self-center">
            No jobs found in the given criteria
          </div>
        ) : ( 
          jobs.map((job) => <Card  key={job._id} job={job}></Card>)
        )}
      </div>
    </div>
  );
};

export default Jobs;
