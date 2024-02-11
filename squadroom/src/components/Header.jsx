import React from "react";
import { FaUser } from "react-icons/fa";
import "../styles/header.css";
import { auth } from "../config/firebase";

const Header = () => {
  const current = auth?.currentUser?.email;
  return (
    <header>
      <div>
        <h1>
          <a style={{ textDecoration: "none", color: "inherit" }} href="/">
            Squad <span> Room</span>
          </a>
        </h1>
        <h3>S.W.A.G</h3>
        <h3>
          Chat Room:-
          <a href="http://localhost:3001/chat" style={{ textDecoration: "none", color: "#8400ff" }}>
            Click Here
          </a>
        </h3>
      </div>

      <a href="/profile" style={{ marginLeft: "auto", color: "white" }}>
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <FaUser /> {auth?.currentUser?.displayName || current}
        </h3>
      </a>
    </header>
  );
};

export default Header;
