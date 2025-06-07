import React, { useState, useEffect } from "react";
import { axiosApi } from "../../config/apiconfig";

const MovieInfo = ({ setOpenDialog, dialogData }) => {
  const {
    id,
    title,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = dialogData;

  const [trailerUrl, setTrailerURL] = useState("");

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axiosApi.get(`/movie/${id}/videos`);
        const trailer = response?.data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          setTrailerURL(`https://www.youtube.com/embed/${trailer?.key}`);
        }
      } catch (error) {
        console.log(error);
      } finally {
        console.log("loaded successfully");
      }
    };
    fetchTrailer();
  }, []);

  return (
    <div
      class="relative z-10"
      aria-labelledby="dialog-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex flex-row gap-6">
                {poster_path ? (
                  <img
                    className="w-1/3 rounded-lg object-cover h-80"
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    Add
                    commentMore
                    actions
                    alt={`${title} poster`}
                  />
                ) : (
                  <div className="w-1/3 rounded-lg h-80 bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image Available
                  </div>
                )}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-blue-500 mb-3">
                    {title}
                  </h2>
                  <p className="text-gray-500 mb-2">
                    <strong>Release Date:</strong> {release_date || "N/A"}
                  </p>
                  <p className="text-gray-500 mb-4">
                    <strong>Average Vote:</strong>
                    {vote_average ? vote_average.toFixed(1) : "N/A"}
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {overview || "No overview available."}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-blue-500 mb-3">
                  Trailer
                </h3>
                <div className="w-full h-64">
                  {trailerUrl ? (
                    <iframe
                      title={`${title} trailer`}
                      className="w-full h-full rounded-lg"
                      src={trailerUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <p className="text-gray-500 text-center">
                      Trailer not available.
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={() => setOpenDialog(false)}
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
