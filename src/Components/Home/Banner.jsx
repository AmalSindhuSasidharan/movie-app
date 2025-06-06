import React, { useEffect, useState } from "react";
import { axiosApi } from "../../config/apiconfig";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    getTrendingMovieList();
  }, []);

  const getTrendingMovieList = () => {
    axiosApi
      .get("/trending/movie/day?language=en-US")
      .then((response) => {
        const movies = response.data.results.slice(0, 5);
        setBannerData(
          movies.map((movie) => ({
            title: movie.title,
            image: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
          }))
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };
  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerData.length);
  };
  return (
    <>
      {bannerData.length > 0 && (
        <div className="relative h-[50vh]">
          <div
            className="h-full bg-cover bg-top rounded-xl"
            style={{
              backgroundImage: `url(${bannerData[currentIndex].image})`,
            }}
          >
            <div className="text-white w-full text-center text-2xl p-4 bg-black/50 rounded-xl">
              {bannerData[currentIndex]?.title}
            </div>
          </div>
          <button
            onClick={previous}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </>
  );
};

export default Banner;
