import React from "react";
import "./Home.scss";
import Header from "./Header/Header";
import Body from "./Body/Body";

const Home = (props) => {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
};

export default Home;
