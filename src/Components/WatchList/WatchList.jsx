import React, { useState, useEffect, useContext } from "react";
import genreids from "../../config/genreId";
import { ArrowUp, ArrowDown } from "lucide-react";
import { MovieContext } from "../MovieContextWrapper";

const WatchList = () => {
  const [search, setSearch] = useState("");

  const { watchList, setWatchList, removeFromWatchList } = useContext(
    MovieContext
  );

  useEffect(() => {
    setWatchList(JSON.parse(localStorage.getItem("movieWatchList")));
  }, []);

  const handleAscendingOrderRatings = () => {
    const sorted = watchList.sort((a, b) => a.vote_average - b.vote_average);
    setWatchList([...sorted]);
  };

  const handleDesendingOrderRatings = () => {
    const sorted = watchList.sort((a, b) => b.vote_average - a.vote_average);
    setWatchList([...sorted]);
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <input
          placeholder="Search by movie name"
          className="h-[3rem] w-[18rem] px-4 outline-none border border-slate-700 rounded-lg bg-gray-300"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex">
                <ArrowUp
                  size={24}
                  strokeWidth={2}
                  onClick={handleAscendingOrderRatings}
                />
                <div>Ratings</div>
                <ArrowDown
                  size={24}
                  strokeWidth={2}
                  onClick={handleDesendingOrderRatings}
                />
              </div>
            </th>
            <th>Popularity</th>
            <th>Genre</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList
            .filter((item) =>
              item.title
                .toLowerCase()
                .trim()
                .includes(search.toLowerCase().trim())
            )
            .map((movie, idx) => (
              <tr key={idx}>
                <td className="flex items-center  px-6 py-4 font-normal text-gray-900">
                  <img
                    className="h-[6rem] w-[10rem] object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt="Poster of Movie"
                  />
                  <div className="font-medium text-gray-700 text-sm">
                    {movie.title}
                  </div>
                </td>
                <td>{movie?.vote_average}</td>
                <td>{movie?.popularity}</td>
                <td>{genreids[movie?.genre_ids[0]]}</td>
                <td className="pl-6 py-4">
                  <button
                    onClick={() => removeFromWatchList(movie)}
                    className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
                  >
                    &#10060;
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default WatchList;
