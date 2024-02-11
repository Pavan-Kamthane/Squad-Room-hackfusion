import React, { useEffect, useState } from "react";
// import { FcGoogle } from "react-icons/fc";
import "../styles/registration.css";
import { db, auth, storage } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  // deleteDoc,
  // doc,
  // updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const Registration = () => {
  
  const [selectStudent, setSelectStudent] = useState(false);
  const [selectFaculty, setSelectFaculty] = useState(false);
  const [selectStaff, setSelectStaff] = useState(false);

  const [userList, setUserList] = useState([]);
  const userCollectionRef = collection(db, "users");

  const [newName, setNewName] = useState("");
  const [newUser, setNewUser] = useState("");
  const [newMobile, setNewMobile] = useState();
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);

  useEffect(() => {
    getUsers();
  });
  const getUsers = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const current = auth?.currentUser?.email;

  const onSubmitData = async () => {
    try {
      await addDoc(userCollectionRef, {
        name: newName,
        username: newUser,
        mobile: newMobile,
        email: auth?.currentUser?.email,
        role: newRole,
        registered: true,
      });

      getUsers();
      window.location.replace("/profile");
    } catch (err) {
      console.error(err);
    }
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    if (!fileUpload) return;
    const fileFolderRef = ref(storage, `posts/${fileUpload.name}`);
    try {
      await uploadBytes(fileFolderRef, fileUpload);
    } catch (err) {
      console.error(err);
    }
  };

  if(auth?.currentUser?.registered === true) return window.location.replace("/");

  return (

    
    <div className="signupBox">
      <h2> Register to Squad Room now</h2>

      <form action="" className="regForm">
        <input
          type="text"
          placeholder="Name"
          required
          name="name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          required
          name="usename"
          onChange={(e) => setNewUser(e.target.value)}
        />
        {/* mobile number */}
        <input
          type="number"
          placeholder="Mobile Number"
          required
          name="mobile"
          onChange={(e) => setNewMobile(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-Mail"
          required
          name="email"
          onChange={(e) => setNewEmail(e.target.value)}
        />

        {/* radio of student,faculty,staff */}
        <div className="radio">
          <div>
            <input
              type="radio"
              id="student"
              name="userType"
              value="student"
              onChange={() => {
                setSelectStudent(true);
                setSelectFaculty(false);
                setSelectStaff(false);
              }}
            />
            <label htmlFor="student">Student</label>
          </div>
          <div>
            <input
              type="radio"
              id="faculty"
              name="userType"
              value="faculty"
              onChange={() => {
                setSelectStudent(false);
                setSelectFaculty(true);
                setSelectStaff(false);
              }}
            />
            <label htmlFor="faculty">Faculty</label>
          </div>

          <div>
            <input
              type="radio"
              id="staff"
              name="userType"
              value="staff"
              onChange={() => {
                setSelectStudent(false);
                setSelectFaculty(false);
                setSelectStaff(true);
              }}
            />
            <label htmlFor="staff">Staff</label>
          </div>
        </div>
        <input
          type="number"
          placeholder="Year"
          required={selectStudent}
          name="year"
          style={{
            display: selectStudent ? "block" : "none",
          }}
        />

        <input
          type="text"
          placeholder="Position"
          required={selectFaculty || selectStaff}
          name="position"
          style={{
            display: selectFaculty || selectStaff ? "block" : "none",
          }}
        />
        {/* id card photo */}
        <input
          type="file"
          placeholder="Id Card"
          required
          name="idCard"
          onChange={(e) => setFileUpload(e.target.files[0])}
        />
        <button type="submit" className="button" onClick={uploadFile}>
          Upload
        </button>
        <button type="submit" className="button" onClick={onSubmitData}>
          Submit
        </button>
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </form>
      {userList.map((user) => (
        <div key={user.id}>
          <h2 style={{ color: user.verified ? "Green" : "Red" }}>
            Username- {user.Name}
          </h2>
          <p>E-mail- {user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Registration;
