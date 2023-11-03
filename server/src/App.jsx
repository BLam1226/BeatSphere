import Navbar from "./Navbar";
import React from "react";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Questions from "./components/Questions";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route className="loginroute" path="/" element={<Login />} />
          <Route className="loginroute" path="/Signup" element={<Signup />} />
          <Route
            className="loginroute"
            path="/Questions"
            element={<Questions />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
