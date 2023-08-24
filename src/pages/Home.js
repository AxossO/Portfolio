import React from "react";
import Nav from "../components/Nav";
import Landing from "../components/Landing";
import About from "../components/About";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Nav />
        <div className="content">
          <Landing />
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
