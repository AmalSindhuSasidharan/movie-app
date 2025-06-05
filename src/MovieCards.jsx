import React from "react";

const MovieCards = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
      className="h-[300px]  bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-center"
    >
      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-xl">
        {movie.title}
      </div>
    </div>
  );
};

export default MovieCards;
