import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthFirebase } from "./Authaticator";
import { useEffect } from "react";
import axios from "axios";

const UpdateProfile = () => {

    const {user} = useContext(AuthFirebase);
    
    
    const handleUpdate = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        let modifiedName = form.get('name'); 
        let modifiedPhoto = form.get('photoUrl');


        if(modifiedName == ''){
            modifiedName = user?.displayName;
         }
        if(user){
            updateProfile(user, {
                displayName: modifiedName
            })
        }
        if(modifiedPhoto == ''){
           modifiedPhoto = user?.photoURL;
        }
        if(user){
            updateProfile(user, {
                photoURL: modifiedPhoto  
            })
        }

        
        axios.patch(`http://localhost:5000/user/${user.email}`, {
            updatedPhoto : modifiedPhoto,
            updatedName : modifiedName
        })
        
    }
  
    return (
        <div>
         
            <div data-aos='fade-left' className="hero min-h-screen mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUpdate} className="card-body bg-red-300 bg-opacity-30 rounded-md">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Modify Name : </span>
                                </label>
                                <input type="text" name='name' placeholder="Your New Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Your Profile Picture :</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="Your New Profile Picture" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-white text-red-500">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;