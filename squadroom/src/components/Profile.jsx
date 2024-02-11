import React, { useState } from "react";
import Header from "./Header";
import img from "../asset/img.jpg";
import "../styles/profile.css";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import ToggleButton from "react-toggle-button";
import { auth } from "../config/firebase";

const Profile = () => {
  const current = auth?.currentUser?.email;

  return (
    <>
      <Header />
      <div className="profie">
        <div className="profileBox">
          <div className="profileDetails">
            <h2>Profile</h2>
            <img src={auth?.currentUser?.photoURL} alt="profile" />
            <h4>Name : {auth?.currentUser?.displayName}</h4>
            <h4>Email : {auth?.currentUser?.email}</h4>
            <h4>Phone no : {auth?.currentUser?.phoneNumber}</h4>

            <div className="toggle">
              <h4>Public</h4>
            </div>
            <p>Scroll Down To See All My Posts</p>
          </div>
          <div className="postsAndother">
            <div className="postbox">
              <h3>Post Title</h3>
              <p>Post Des</p>
              <img src={img} alt="" />
              <div className="btns">
                <button>
                  <AiFillLike />
                </button>
                <button>
                  <FaCommentDots />
                </button>
              </div>
            </div>
            <div className="postbox">
              <h3>Post Title</h3>
              <p>Post Des</p>
              <img src={img} alt="" />
              <div className="btns">
                <button>
                  <AiFillLike />
                </button>
                <button>
                  <FaCommentDots />
                </button>
              </div>
            </div>
            <div className="postbox">
              <h3>Post Title</h3>
              <p>Post Des</p>
              <img src={img} alt="" />
              <div className="btns">
                <button>
                  <AiFillLike />
                </button>
                <button>
                  <FaCommentDots />
                </button>
              </div>
            </div>
            <div className="postbox">
              <h3>Post Title</h3>
              <p>Post Des</p>
              <img src={img} alt="" />
              <div className="btns">
                <button>
                  <AiFillLike />
                </button>
                <button>
                  <FaCommentDots />
                </button>
              </div>
            </div>
            <div className="postbox">
              <h3>Post Title</h3>
              <p>Post Des</p>
              <img src={img} alt="" />
              <div className="btns">
                <button>
                  <AiFillLike />
                </button>
                <button>
                  <FaCommentDots />
                </button>
              </div>
            </div>
            <div className="postbox">
              <h3>Post Title</h3>
              <p>Post Des</p>
              <img src={img} alt="" />
              <div className="btns">
                <button>
                  <AiFillLike />
                </button>
                <button>
                  <FaCommentDots />
                </button>
              </div>
            </div>
            <div className="postbox">
              <h3>Post Title</h3>
              <p>Post Des</p>
              <img src={img} alt="" />
              <div className="btns">
                <button>
                  <AiFillLike />
                </button>
                <button>
                  <FaCommentDots />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
