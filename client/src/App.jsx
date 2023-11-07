import Navbar from "./Navbar";
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route className="loginroute" path="/" element={<Login />} />
          <Route className="loginroute" path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
