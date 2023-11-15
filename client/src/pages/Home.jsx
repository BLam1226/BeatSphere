import React from "react";
import { useLocation } from "react-router-dom";
import "./Home.css"; // Import your custom styles

const Home = () => {
  const location = useLocation();

  return (
    <main className="main-content">
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          <p className="m-0">
            Where Rhythms Resonate, and Music Takes Shape!
          </p>
          <img src="./wireframe-globe.png" alt="Description" />
        </div>
      </div>
    </main>
  );
};

export default Home;
