import React, { useContext } from "react";
import { AuthFirebase } from "./Authaticator";

const Company = () => {
  const {user} = useContext(AuthFirebase);
  
  const [app, setApp] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/post").then((res) => setJobs(res.data));
  }, [jobs]);
  //console.log(jobs)

  useEffect(() => {
    axios.get("http://localhost:5000/apply").then((res) => setApp(res.data));
  }, [app]);
  //console.log(user);

  

  return (
  <div>
    company name {user?.name}
    <img src={user?.image} />
    company email {user?.email}
    {/* <img src={company.image} alt="" /> */}
  </div>
  );
};

export default Company;
