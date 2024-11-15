import React, { useContext } from 'react'
import { AuthFirebase } from '../pages/Authaticator'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const {user, logOut} = useContext(AuthFirebase);
  return (
    <div className='bg-primary-200 text-white'>
      <img src={user?.photoURL} className='rounded-full'/>
      <div>
      <h1>User Details:</h1>
      <h1>{user?.displayName}</h1>
      <h1>{user?.email}</h1>
      </div>
      <div className='flex my-8'>
      <div> {
        user&&
        <Link to={'/update'}><button className='bg-green-400 p-3 mx-5 rounded-md'>Update</button></Link> }
      </div>
      <div>{
        user&& <button className='bg-red-400 p-3 rounded-md' onClick={() => (logOut())}>LogOut</button>
      }</div></div>
    </div>
  )
}

export default SideBar