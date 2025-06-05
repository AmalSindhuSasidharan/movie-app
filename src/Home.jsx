import React from "react";
import Banner from "./Banner";
import Movies from "./Movies";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="p-6">
        <Movies />
      </div>
    </>
  );
};

export default Home;
