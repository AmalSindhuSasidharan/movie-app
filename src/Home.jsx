import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    fakeiApi();
  }, []);

  const fakeiApi = () => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => console.log(response.data));
  };

  return <div>Home component</div>;
};

export default Home;
