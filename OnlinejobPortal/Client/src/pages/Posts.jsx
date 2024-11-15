import axios from "axios";
import React, { useContext } from "react";
import { AuthFirebase } from "./Authaticator";

function Posts() {
  const {user} = useContext(AuthFirebase);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title");
    const company = form.get("company");
    const location = form.get("location");
    const jobtype = form.get("jobtype");
    const workplacetype = form.get("workplacetype");
    const responsibities = form.get("responsibities");
    const requirements = form.get("requirements");
    const qualifications = form.get("qualifications");
    const minsalary = form.get("minsalary");
    const maxsalary = form.get("maxsalary");
    const deadline = form.get("deadline");
    const overview = form.get("overview");
    const benefits = form.get("benefits");
    const companyim = form.get("companyim");
    const userEmail = user?.email

    const formData = {
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
      userEmail,
    };

    const me = axios.post("http://localhost:5000/post", formData);
    if (me) {
      alert("Job posted successfully");
      //console.log(me);
      window.location.reload();
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center mb-6 gap-none bg-white-100">
      <div className="bg-primary-200 text-white p-8 rounded-lg shadow-lg mt-9 relative w-screen ml-6 mr-6">
        <h1 className="text-4xl text-white flex justify-center mb-6 text-bold">
          Fill Out Your Criterias
        </h1>
        <form
          className="bg-mid-mid rounded-lg grid grid-cols-2 gap-x-24 shadow-lg p-8 mt-8"
          onSubmit={handleSubmit}
        >
          <label htmlFor="title" className="block font-semibold mt-4 ">
            Job title:
            <input
              type="text"
              name="title"
              className="text-black ml-4 mt-3  mr-4 rounded-sm w-full p-2"
              required
            />
          </label>
          <label htmlFor="company" className="block font-semibold mt-4">
            Company Name:
            <input
              type="text"
              name="company"
              className="text-black ml-4 mt-3  mr-4 rounded-sm w-full p-2"
            />
          </label>
          <label htmlFor="companyim" className="block font-semibold mt-4">
            Company Logo:
            <input
              type="url"
              name="companyim"
              className="text-black ml-4 mt-3 bg-white mr-4 rounded-sm w-full p-2"
            />
          </label>
          <label htmlFor="loaction" className="block font-semibold mt-4">
            Location:
            <input
              type="text"
              name="location"
              className="text-black ml-4 mt-3  mr-4 rounded-sm w-full p-2"
            />
          </label>
          <label htmlFor="jobtype" className="block font-semibold mt-4">
            Job Type:
            <select
              name="jobtype"
              className="text-black ml-4 mt-3  mr-4 rounded-sm w-full p-2"
            >
              <option value="" selected disabled>
                Pick your job type
              </option>
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
              <option value="contract">Contract</option>
              <option value="temporary">Temporary</option>
              <option value="internship">Internship</option>
            </select>
          </label>
          <label htmlFor="workplacetype" className="block  font-semibold mt-4">
            Workplace Type:
            <select
              name="workplacetype"
              className="text-black ml-4 mt-3  mr-4 rounded-sm w-full p-2"
            >
              <option value="" disabled selected>
                Remote Work?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </label>
          <label
            htmlFor="responsibities"
            className="block col-span-2  font-semibold mt-4"
          >
            Key Responsibilities:
            <textarea
              type="text"
              name="responsibities"
              className="text-black ml-4 mt-3 mr-4 rounded-sm w-full min-h-48 p-2 resize-none"
            />
          </label>
          <label
            htmlFor="requirements"
            className="block  col-span-2 font-semibold mt-4"
          >
            Requirements:
            <textarea
              type="text"
              name="requirements"
              className="text-black ml-4 mt-3 mr-4 rounded-sm w-full min-h-36 p-2 resize-none"
            />
          </label>
          <label
            htmlFor="qualifications"
            className="block col-span-2 font-semibold mt-4"
          >
            Preferred Qualifications:
            <textarea
              type="text"
              name="qualifications"
              className="text-black ml-4 mt-3 mr-4 rounded-sm w-full min-h-36 p-2 resize-none"
            />
          </label>
          <label htmlFor="salary" className="block font-semibold mt-4">
            Salary Range:
            <br />
            <input
              type="number"
              name="minsalary"
              placeholder="Minimum"
              className="text-black ml-4 mt-3 mr-4 rounded-sm w-auto p-2"
            />
            <input
              type="number"
              name="maxsalary"
              placeholder="Maximum"
              className="text-black ml-4 mt-3 mr-4 rounded-sm w-auto p-2"
            />
          </label>
          <label htmlFor="deadline" className="block font-semibold mt-4">
            Application Deadline:
            <br />
            <input
              type="date"
              name="deadline"
              className="text-black ml-4 mt-3 mr-4 rounded-sm w-full p-2"
            />
          </label>
          <label
            htmlFor="overview"
            className="block col-span-2 font-semibold mt-4"
          >
            Company Overview:
            <textarea
              name="overview"
              className="text-black ml-4 mt-3 mr-4 rounded-sm w-full min-h-36 p-2 resize-none"
            />
          </label>
          <label
            htmlFor="benefits"
            className="block col-span-2 font-semibold mt-4"
          >
            Benefits:
            <textarea
              name="benefits"
              className="text-black ml-4 mt-3 mr-4 rounded-sm w-full min-h-36 p-2 resize-none"
            />
          </label>

          <input
            type="submit"
            value="Submit"
            className="bg-primary-100 text-white col-span-2 rounded-lg mt-8 py-2 w-24 flex justify-self-end"
          />
        </form>
      </div>
    </div>
  );
}

export default Posts;
