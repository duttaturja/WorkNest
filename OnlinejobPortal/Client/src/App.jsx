import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import Footer from "./Components/Footer";
import User from "./pages/User";
import Application from "./pages/Application";
import Jobs from "./pages/Jobs";
import Details from "./pages/Details";
import Autheticator from "./pages/Authaticator";
import Company from "./pages/Company";
import UpdateProfile from "./pages/UpdateProfile";
//import Update from "./pages/Update";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Autheticator>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/search" element={<Jobs />} />
        <Route path="/user" element={<User />} />
        <Route path="/company" element={<Company />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/apply/:id" element={<Application />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/update" element={<UpdateProfile></UpdateProfile>} />
      </Routes>
      </Autheticator>
      <Footer />
    </div>
  );
}

export default App;
