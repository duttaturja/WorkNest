import React, { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { auth, googleProvider } from "../Firebase/firebase.config";
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import axios from "axios";
import User from "./User";
import Company from "./Company";

const LogIn = () => {
  const [user, setUser] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    const role = form.get("role");
    const email = form.get("email");
    const password = form.get("password");
    //const loginData = { email, password, role };
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await axios.get("http://localhost:5000/user");
      alert("Logged in Successfully");
      window.location.href="/company"
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed");
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth , currenUser => {
      setUser(currenUser);
    })
     return () => {return unSubscribe()}
  }, [])
  

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((data) => {
        const userInfo = {
          email: data.user.email,
          name: data.user.displayName,
          image: data.user.photoURL,
        };
        axios.post("http://localhost:5000/user", userInfo);
      });
      alert("Google login successful"); 
      window.location.href="/user" 
    } catch (error) {
      console.error("Google login error:", error.message);
      alert("Google login failed");
    }
  };



  return (
    <div className="min-h-screen flex grid-rows-1 items-center justify-center gap-none bg-white-100">
      <div className="bg-primary-200 p-8 rounded-lg shadow-lg max-w-md h-full">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">
          Welcome Back
        </h1>
        <h3 className="text-2xl mb-4 text-white text-center">
          Create an Account?
        </h3>
        <Link to="/signin">
          <button className="bg-secondary-100 rounded flex items-center justify-center ml-20 mt-4 px-4 py-2 w-24">
            Sign In
          </button>
        </Link>
        <br />
        <h4 className="text-white mb-4">Other ways to Sign in</h4>
        <button
          className="bg-secondary-100 rounded p-1.5 text-center mb-6 w-full flex justify-center"
          onClick={handleGoogleLogin}
        >
          <FaGoogle size={28} className="mr-3"/>
          Sign in with Google
        </button>
      </div>
      <div className="bg-secondary-100  p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-primary-200 text-center">
          Sign in to your account
        </h1>
        <div className="border-t mt-4">
          <form onSubmit={handleLogin}>
            
            <label htmlFor="email" className="block text-sm font-semibold mt-4">
              Email:
            </label>
            <input
              type="text"
              name="email"
              placeholder="example@site.com"
              className="border rounded px-3 py-2 w-full"
            />
            <label
              htmlFor="password"
              className="block text-sm font-semibold mt-4"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Required atleast 8 letters"
              className="border rounded px-3 py-2 w-full"
            />

            <input
              type="submit"
              className="bg-primary-100 text-white rounded mt-4 px-4 py-2"
              value="Log In"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
