import {useState, useEffect} from "react"
import React from "react";
import SideBar from "./SideBar";
import "../styles/home.css";
import img from "../asset/img.jpg";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import Header from "./Header";
import { auth, db } from "../config/firebase";
import {getDocs, collection} from "firebase/firestore"



const Home = () => {
  // if (auth?.currentUser?.email == null)
  // return window.location.replace("/login");

  const [posts, setPosts] = useState([]);
  const userCollectionRef = collection(db, "post");

  
  useEffect(() => {
    getPosts();
  });
  const getPosts = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      <SideBar />

      <div className="post">
        <h1>See All Feeds</h1>
        <div className="allPosts">
        {posts.map((post) => (
            <div className="postbox" key={post.id}>
              <h3>{post.Title}</h3>
              <p>{post.description}</p>
              <h5 style={{ textAlign: "left", marginBottom: "10px" }}>
                @{post.author}
              </h5>
              <img src={post.imageURL} alt="Hello" />
              <div className="btns">
                <button>
                  <AiFillLike />
                </button>
                <button>
                  <FaCommentDots />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
