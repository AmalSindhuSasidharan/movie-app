import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    fakeiApi();
  }, []);

  const fakeiApi = () => {
    fetch("https://fakestoreapi.com/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return <div>Home component</div>;
};

export default Home;
