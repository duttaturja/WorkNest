import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const [jobs, setJobs] = useState([]);
    const params = useParams();
    
  
  useEffect(() => {
    axios.get("http://localhost:5000/post").then((res) => setJobs(res.data));
  }, [jobs]);

  const jobDetails = jobs.find(el => el._id == params.id);
  

  return (
    <div className="bg-secondary-200 text-white p-2 mx-12 my-8 px-8 py-4 rounded-md grid grid-cols-2 ">
      <h1 className='text-3xl font-semibold'>Job Title:<h1 className='font-medium text-2xl px-4 py-4'>{jobDetails?.title}</h1></h1>
      <img src={jobDetails?.companyim} className='bg-white h-12 w-full' />
      <h1 className='text-2xl font-semibold'>Company Name:<h1 className='font-medium text-xl px-4 py-4'>{jobDetails?.company}</h1></h1>
      <h1 className='text-2xl font-semibold'>Job Location:<h1 className='font-medium text-xl px-4 py-4'>{jobDetails?.location}</h1></h1>
      <h1 className='text-2xl font-semibold'>Workplace Type:<h1 className='font-medium text-xl px-4 py-4'>{jobDetails?.workplacetype}</h1></h1>
      <h1 className='text-2xl font-semibold'>Job type:<h1 className='font-medium text-xl px-4 py-4'>{jobDetails?.jobtype}</h1></h1>
      <h1 className='text-2xl font-semibold'>Salary Range:<h1 className='font-medium text-xl px-4 py-4'>{jobDetails?.minsalary}-{jobDetails?.maxsalary}K/Month</h1></h1>
      <h1 className='text-2xl font-semibold col-span-2'>Job Responsibilities:<h1 className='font-medium text-base px-4 py-4'>{jobDetails?.responsibities}</h1></h1>
      <h1 className='text-2xl font-semibold col-span-2'>Job Requirements:<h1 className='font-medium text-base px-4 py-4'>{jobDetails?.requirements}</h1></h1>
      <h1 className='text-2xl font-semibold col-span-2'>Company Overview:<h1 className='font-medium text-base px-4 py-4'>{jobDetails?.overview}</h1></h1>
      <h1 className='text-2xl font-semibold col-span-2'>Company Overview:<h1 className='font-medium text-base px-4 py-4'>{jobDetails?.benefits}</h1></h1>
      <div className='bg-green-400 text-white h-12 w-24 pb-3 pl-2 mb-8 mt-12 rounded-lg place-content-end'>
      <Link to={`/apply/${params.id}`}><button className=''>Apply Now</button></Link>
    </div></div>
  );
}

export default Details