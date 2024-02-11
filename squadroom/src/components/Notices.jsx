import React from "react";
import SideBar from "./SideBar";
import "../styles/home.css";
import img from "../asset/download (10).jpeg";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import Header from "./Header";
import { auth } from "../config/firebase";

const Notices = () => {
  const current = auth?.currentUser?.email;
  return (
    <>
      <Header />
      <SideBar />

      <div className="post">
        <h1>Notice Board</h1>
        <br />
        {/* Cerate Notice */}
        <a href="/createnotice">
            <button className="button">Create Notice</button>
        </a>
        <div className="allPosts">
          <div className="postbox">
            <h3>Notice Title </h3>
            <p>Notice Des</p>
            <h4>All Branch</h4>
            <h5 style={{ textAlign: "left", marginBottom: "10px" }}>HOD MAM</h5>
            <img src={img} alt="" />
            <p>12 march 2054</p>
          </div>
          <div className="postbox">
            <h3>Notice Title 1</h3>
            <p>Notice Des</p>
            <h4>MECH</h4>
            <h5 style={{ textAlign: "left", marginBottom: "10px" }}>HOD MAM</h5>
            <img src={img} alt="" />
            <p>12 march 2054</p>
          </div>
          <div className="postbox">
            <h3>Notice Title 2</h3>
            <p>Notice Des</p>
            <h4>IT</h4>
            <h5 style={{ textAlign: "left", marginBottom: "10px" }}>HOD MAM</h5>
            <img src={img} alt="" />
            <p>12 march 2054</p>
          </div>
          <div className="postbox">
            <h3>Notice Title 3</h3>
            <p>Notice Des</p>
            <h4>CSE</h4>
            <h5 style={{ textAlign: "left", marginBottom: "10px" }}>HOD MAM</h5>
            <img src={img} alt="" />
            <p>12 march 2054</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notices;
