import axios from "axios";
import React, { useEffect, useState } from "react";

const useAllJobs = () => {
  const [job, setJob] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/post").then((res) => setJob(res.data));
  }, []);
  return job;
};

export default useAllJobs;
