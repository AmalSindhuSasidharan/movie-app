import React, { useEffect } from "react";
import { axiosApi } from "./config/apiconfig";

const Home = () => {
  useEffect(() => {
    fakeiApi();
  }, []);

  const fakeiApi = () => {
    axiosApi
      .get("/trending/movie/day?language=en-US")
      .then((response) => {
        console.log("movie response ", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return <div>Home component</div>;
};

export default Home;
