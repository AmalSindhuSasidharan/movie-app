import React, { useEffect, useState, useContext } from "react";
import { axiosApi } from "../../config/apiconfig";
import { MovieContext } from "../MovieContextWrapper";
import MovieCards from "./MovieCards";
import MovieInfo from "./MovieInfo";
import Pagination from "./Pagination";

const Movies = () => {
  const [bannerData, setBannerData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogData, setDialogData] = useState(null);

  const { watchList } = useContext(MovieContext);

  useEffect(() => {
    getTrendingMovieList();
  }, [pageNo]);

  const getTrendingMovieList = () => {
    axiosApi
      .get(`/trending/movie/day?language=en-US&page=${pageNo}`)
      .then((response) => {
        const movies = response.data.results;
        setTotalPages(response.data.total_pages);
        setBannerData([...movies]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleNext = () => {
    setPageNo((prev) => {
      if (prev + 1 === totalPages) {
        return prev;
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setPageNo((prev) => {
      if (prev === totalPages) {
        return prev;
      }
      return prev - 1;
    });
  };

  const isMovieSelected = (movie) => {
    const movieFromList = watchList.filter((item) => item.id === movie.id);
    return movieFromList.length > 0 ? true : false;
  };

  const openMovieInfoDialog = (movie) => {
    setDialogData(movie);
    setOpenDialog(true);
  };

  return (
    <>
      <h1 className="text-3xl font-bold py-5 text-center">Trending Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8  gap-x-6 gap-y-8">
        {bannerData.map((movie, idx) => (
          <MovieCards
            movie={movie}
            key={idx}
            isMovieSelected={isMovieSelected}
            openMovieInfoDialog={openMovieInfoDialog}
          />
        ))}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      {openDialog && dialogData ? (
        <MovieInfo setOpenDialog={setOpenDialog} dialogData={dialogData} />
      ) : (
        ""
      )}
    </>
  );
};

export default Movies;
