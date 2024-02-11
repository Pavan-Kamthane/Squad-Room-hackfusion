import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import "../styles/registration.css";
import { auth } from '../config/firebase';

const CreateNotice = () => {
  const current = auth?.currentUser?.email;
  return (
    <>
    <Header/>
    <SideBar/>
    <div className="signupBox">
      <h2>Create Notice</h2>
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
  )
}

export default CreateNotice