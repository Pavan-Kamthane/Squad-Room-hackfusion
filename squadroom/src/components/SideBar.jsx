import React from "react";
import "../styles/sidebar.css";
import { FaSearch } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
// import { IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaPenSquare } from "react-icons/fa";
import { logout } from "./auth";

const SideBar = () => {
  const isLoggedIn = true; // Placeholder for demonstration, replace with your actual logic

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h3>Squad Room</h3>
      </div>
      <div className="sidebar__profile">
        {/* <img src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg" alt="profile" /> */}
        {/* <h4>username@gmail.com</h4> */}
      </div>
      <div className="sidebar__content">
        <ul>
          <li style={{ marginTop: "109px" }}>
            <a href="/">Home</a>
          </li>
          <li>
            <span>
              <FaSearch />
              <input type="text" placeholder="Search..." />
            </span>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li className="create">
            <a href="/createpost">
              <CiSquarePlus style={{ fontSize: "20px" }} />
            </a>
          </li>
          {/* <li>
            <IoMdSettings />
          </li> */}
          <li>
            <FaBell />
          </li>
          <li>
            <a href="/notices">
              <CiMail />
            </a>
          </li>
          <li>
            <a href="/complentbox">
              <FaPenSquare />
            </a>
          </li>
          {isLoggedIn ? (
            <li>
              <button
                style={{
                  backgroundColor: "white",
                  border: "none",
                  cursor: "pointer",
                  padding: "15px 20px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#ff0000",
                  borderRadius: "30px",
                }}
                onClick={logout}
              >
                Log Out
              </button>
            </li>
          ) : (
            <>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
