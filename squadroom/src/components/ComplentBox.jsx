import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import "../styles/home.css";
import img from "../asset/img2.jpeg";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import Header from "./Header";
import { auth, db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const ComplentBox = () => {
  const [complaints, setComplaints] = useState([]);
  const userCollectionRef = collection(db, "complaints");

  useEffect(() => {
    getComplaints();
  });
  const getComplaints = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComplaints(filteredData);
    } catch (err) {
      console.error(err);
    }
  };
  const current = auth?.currentUser?.email;
  return (
    <>

      <Header />
      <SideBar />

      <div className="post">
        <h1>Complaint Box</h1>
        <br />
        {/* Cerate Notice */}
        <a href="/createcomplaint ">
          <button className="button">Create Complaint</button>
        </a>

        {
          complaints.map((complaint) => (
            <div className="postbox" key={complaint.id}>
              <h3>{complaint.title}</h3>
              <p>{complaint.description}</p>
              <h5 style={{ textAlign: "left", marginBottom: "10px" }}>
                @{complaint.author}
              </h5>
              <img src={complaint.imageURL} alt="Hello" />
              <p>{complaint.date}</p>
            </div>
          ))
        }

        
        </div>
    </>
  );
};

export default ComplentBox;
