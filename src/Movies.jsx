import React, { useEffect, useState } from "react";
import { axiosApi } from "./config/apiconfig";
import MovieCards from "./MovieCards";

const Movies = () => {
  const [bannerData, setBannerData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    getTrendingMovieList();
  }, []);

  const getTrendingMovieList = () => {
    axiosApi
      .get(`/trending/movie/day?language=en-US&page=${pageNo}`)
      .then((response) => {
        const movies = response.data.results;
        setBannerData([...movies]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <h1>Trending Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8  gap-x-6 gap-y-8">
        {bannerData.map((movie, idx) => (
          <MovieCards movie={movie} key={idx} />
        ))}
      </div>

      <div>pagination</div>
    </>
  );
};

export default Movies;
