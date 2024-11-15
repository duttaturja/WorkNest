import React, { useState } from 'react'
//import { AuthFirebase } from './Authaticator'
//import { Link } from 'react-router-dom';
import SideBar from '../Components/SideBar';

const User = () => {
  //const {user, logOut} = useContext(AuthFirebase);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='text-center mx-auto flex justify-center my-20 grid grid-rows-3 py-2'>
      <SideBar />
    </div>
  );
};

export default User;