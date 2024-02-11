import React from "react";
import { FcGoogle } from "react-icons/fc";
import "../styles/login.css";
import { signInWithGoogle } from "../components/auth";
import { auth } from "../config/firebase";

const Login = () => {
  const current = auth?.currentUser?.email;
  
  return (
    <>
      <div className="signupBox">
        <h2>{current} Log In to Squad Room now</h2>
        <button className="btn btn-primary google" onClick={signInWithGoogle}>
          <FcGoogle /> <span>Log In with Google</span>
        </button>
        <br />
        {/* <p>Or Log In with your email address:</p> */}
        <br />
        {/* <form action="/" method="Post" className="regForm">
          <input type="email" placeholder="Email" required name="email" />
          <input
            type="text"
            placeholder="Mobile Number"
            required
            name="mobile"
          />

          <button type="submit" className="button" onClick={logout}>
            Logout
          </button>
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form> */}
      </div>
    </>
  );
};

export default Login;
