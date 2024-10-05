import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logo from './img/Gym Center (1)_pages-to-jpg-0001.jpg';
import "./App.css";
import Auth from "./components/Authentication/Auth";
import Chat from "./components/Chat/Chat";
import Main from "./components/Main/Main";
import MyProfile from "./components/My-Profile/MyProfile";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = useSelector((state) => state.authReducer.authData);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="main-mobile">
        <img className="main-img" src={logo} alt="Logo" /> {/* Add logo here */}
        <h2 className="mobile-title">Welcome!</h2>
        <div className="mobile-message">
          Please open this application on a desktop screen for the best experience.
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Navigate to="main" /> : <Navigate to="auth" />} />
        <Route path="/main" element={user ? <Main /> : <Navigate to="../auth" />} />
        <Route path="/auth" element={user ? <Navigate to="../main" /> : <Auth />} />
        <Route path="/profile/:id" element={user ? <MyProfile /> : <Navigate to="../auth" />} />
        <Route path="/chat" element={user ? <Chat /> : <Navigate to="../auth" />} />
      </Routes>
    </div>
  );
}

export default App;
