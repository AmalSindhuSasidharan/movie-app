import React from "react";
import Banner from "./Banner";
import Movies from "./Movies";

const Home = () => {
  return (
    <>
      <div className="p-6">
        <Banner />
        <Movies />
      </div>
    </>
  );
};

export default Home;
