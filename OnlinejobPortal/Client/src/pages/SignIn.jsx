import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase/firebase.config";
import axios from "axios";

function SignIn() {
  const handleSingin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmpassword")
    const signinData = {name, email, password, };
    //console.log(signinData);
    if (password.length <= 7) {
      alert("Password must contain 8 letters");
      return;
    }

    if(password.length != confirmPassword.length) {
      alert("Try again!")
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      axios.post("http://localhost:5000/user", signinData);
      alert("signed in successfully");
      window.location.href = "/login";
    } catch (error) {
      console.error("Sign in error:", error.message);
      alert("Sign in failed");
    }
  };
  const handleGoogleSignin = async () => {
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
      <div className="bg-secondary-100 p-8 rounded-lg shadow-lg max-w-md">
        
        <div className="border-t mt-4">
          <form onSubmit={handleSingin}>
          <h1 className="text-3xl font-bold mb-4 text-primary-200 text-center">
          Create a new account
        </h1>
            <label htmlFor="Name" className="block text-sm font-semibold ">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              className="border rounded px-3 py-2 w-full"
            />
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
            <label
              htmlFor="confirpassword"
              className="block text-sm font-semibold mt-4"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Required atleast 8 letters"
              className="border rounded px-3 py-2 w-full"
            />

            <input
              className="bg-primary-100 text-white rounded mt-4 px-4 py-2"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
      <div className="bg-primary-200 p-8 rounded-lg shadow-lg max-w-md h-full">
        <h1 className="text-5xl font-bold mb-4 text-white text-center">
          Hello, Welcome <br /> <h1 className="text-3xl">to</h1> WorkNest
        </h1>
        
        <h3 className="text-xl mb-4 text-white text-center">
          Already have an account?
        </h3>
        <Link to="/login">
          <button
            type="button"
            className="bg-secondary-100 rounded flex ml-36 justify-self-center mt-4 px-4 py-2 w-20"
          >
            Log In
          </button>
        </Link>
        <br />
        <h4 className="text-white mb-4">Other ways to Sign in</h4>
        <button
          className="bg-secondary-100 rounded p-1.5 text-center mb-6 w-full flex justify-center"
          onClick={handleGoogleSignin}
        >
          <FaGoogle size={28} className="mr-3"/>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default SignIn;
