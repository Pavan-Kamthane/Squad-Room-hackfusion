import { BrowserRouter as Raouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import CreateNotice from './components/CreateNotice';
import Notices from './components/Notices';
import ComplentBox from './components/ComplentBox';
import CreateComplaint from './components/CreateComplaint';
import { auth } from './config/firebase';
// import SignupOnce from './components/SignupOnce';

function App() {
  // const current = auth?.currentUser?.email;
  // if (auth?.currentUser?.email == null)
    // return window.location.replace("/login");
  // console.log(window.location);
  console.log(auth?.currentUser?.email);

  return (
      <Raouter >
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Registration />} />
          {/* <Route path="/signuponce" element={<SignupOnce />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/createnotice" element={<CreateNotice />} />
          <Route path="/createcomplaint" element={<CreateComplaint />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/complentbox" element={<ComplentBox />} />
        </Routes>
      </Raouter>
  );
}

export default App;
