
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Header from "./Header.jsx";
import "../styles/registration.css";
import SideBar from "./SideBar";
import { auth } from "../config/firebase.js";
// import Login from "./Login.jsx"





const CreatePost = () => {
  const current = auth?.currentUser?.email;
  return (
    <>
    <Header/>
    <SideBar/>
    <div className="signupBox">
      <h2>Create Post</h2>
      <br />
      <form action="" className="regForm">
        <input type="text" placeholder="title" required name="title" />
        <input type="text" placeholder="description" required name="description" />
        
        <input type="file" placeholder="Id Card" required name="idCard" />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default CreatePost;
