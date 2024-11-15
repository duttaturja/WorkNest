import axios from "axios";
import React,{useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { AuthFirebase } from "./Authaticator";

const Application = () => {
  const {user} = useContext(AuthFirebase);
  const [app, setApp] = useState([]);

  const [jobs, setJobs] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios.get("http://localhost:5000/post").then((res) => setJobs(res.data));
  }, [jobs]);
  //console.log(jobs)

  useEffect(() => {
    axios.get("http://localhost:5000/apply").then((res) => setApp(res.data));
  }, [app]);

  const currentJob = jobs.find(el => el._id == params.id);
  

  const handleApply = (e) => {
    e.preventDefault();

    const exist = app.find((application) => application.userEmail == user?.email);
  
    if(exist) {
      return alert("Already Applied for the job");
    }
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const address = form.get("address");
    const previous = form.get("previous");
    const eligibility = form.get("eligibility");
    const convict = form.get("convict");
    const ref1 = form.get("ref1");
    const ref2 = form.get("ref2");
    const resume = form.get("resume");
    const declaration = form.get("declaration");
    const companyName = currentJob.userEmail; 

    const applicationData = {
      name,
      phone,
      address,
      previous,
      eligibility,
      convict,
      ref1,
      ref2,
      resume,
      declaration,
      companyName,
    };
    const bet = axios.post("http://localhost:5000/apply", applicationData);
    if (bet) {
      alert("Application submitted successfully");
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mb-6 gap-none bg-white-100">
      <div className="bg-primary-200 text-white p-8 rounded-lg shadow-lg mt-9 relative w-screen ml-6 mr-6">
        <h1 className="text-4xl text-white flex justify-center mb-6 text-bold">
          Application Form
        </h1>
        <h3 className="">Currently applying for the post {currentJob?.title} in {currentJob?.company} located at {currentJob?.location}</h3>
        <form
          onSubmit={handleApply}
          className="bg-mid-mid rounded-lg grid grid-cols-2 gap-x-24 shadow-lg p-8 mt-8"
        >
          <label htmlFor="name" className="block font-semibold mt-4 ">
            Full Name:
            <input
              type="text"
              name="name"
              className="text-black ml-4 mt-3  mr-4 rounded-sm w-full p-2"
            />
          </label>
          <label htmlFor="phone" className="block font-semibold mt-4 ">
            Phone Number:
            <input
              type="text"
              name="phone"
              className="text-black ml-4 mt-3  mr-4 rounded-sm w-full p-2"
            />
          </label>
          <label
            htmlFor="address"
            className="block font-semibold mt-4 col-span-2"
          >
            Address:
            <textarea
              type="text"
              name="address"
              className="text-black ml-4 mt-3 h-20 mr-4 rounded-sm w-full p-2 resize-none"
            />
          </label>
          <label
            htmlFor="previous"
            className="block font-semibold mt-4 col-span-2"
          >
            Previous Employer Details:
            <textarea
              type="text"
              name="previous"
              className="text-black ml-4 mt-3 min-h-48 mr-4 rounded-sm w-full p-2 resize-none"
            />
          </label>

          <label htmlFor="ref1" className="block font-semibold mt-4 ">
            Reference 1:
            <textarea
              type="text"
              name="ref1"
              className="text-black ml-4 mt-3 min-h-32 mr-4 rounded-sm w-full p-2 resize-none"
            />
          </label>
          <label htmlFor="ref2" className="block font-semibold mt-4 ">
            Reference 2:
            <textarea
              type="text"
              name="ref2"
              className="text-black ml-4 mt-3 min-h-32 mr-4 rounded-sm w-full p-2 resize-none"
            />
          </label>
          <label htmlFor="eligibility" className="block font-semibold mt-4 ">
            Are you legally eligible to work in this country?
            <select
              name="eligibility"
              className="text-black ml-4 mt-3  mr-4 rounded-sm w-full p-2"
            >
              <option value="" selected disabled>
                Select One
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label htmlFor="convict" className="block font-semibold mt-4 ">
            Have you ever been convicted of a felony?
            <select
              name="convict"
              className="text-black ml-4 mt-3  mr-4 rounded-sm w-full p-2"
            >
              <option value="" selected disabled>
                Select One
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
          <label htmlFor="resume" className="block font-semibold mt-4 ">
            Resume:
            <input
              type="file"
              name="resume"
              className="text-black ml-4 mt-3  mr-4 rounded-sm w-full p-2"
            />
          </label>
          <label
            htmlFor="declaration"
            className="block font-semibold mt-4 flex items-start col-span-2"
          >
            <input
              type="checkbox"
              name="declaration"
              className="text-black ml-4 mt-1  mr-4 rounded-sm p-2"
            />
            I hereby declare that the information provided is true and correct
            to the best of my knowledge.
          </label>
          <input
            type="submit"
            value="Submit"
            className="bg-primary-100 text-white rounded-lg mt-4 px-4 py-2 col-span-2 justify-self-end"
          />
        </form>
      </div>
    </div>
  );
};

export default Application;
