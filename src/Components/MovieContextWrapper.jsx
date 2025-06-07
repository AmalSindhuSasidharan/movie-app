import React, { useState, useEffect, createContext } from "react";

export const MovieContext = createContext();

const MovieContextWrapper = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    setWatchList(JSON.parse(localStorage.getItem("movieWatchList")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("movieWatchList", JSON.stringify(watchList));
  }, [watchList]);

  const addToWatchList = (movie) => {
    setWatchList((prev) => {
      return [...prev, movie];
    });
  };

  const removeFromWatchList = (movie) => {
    setWatchList((prev) => {
      const filteredList = prev.filter((item) => item.id !== movie.id);
      return [...filteredList];
    });
  };

  return (
    <MovieContext.Provider
      value={{ watchList, setWatchList, addToWatchList, removeFromWatchList }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextWrapper;
