"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
const Movie = ({ query, searchQuery }) => {
  const [Movies, setMovies] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [page, setpage] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?page=${page}&query=${query}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWJjN2ZjNGU1MDlhZTkwODlmYzEwYzdiNGExNTYxOSIsInN1YiI6IjY1MGU2NGYzM2E0YTEyMDBlMjkzYjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iyeum86TsafQQE680a7WdBzjfdlqQpD5xSN6eiUv4I8`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        if (searchQuery) {
          setMovies(
            Movies.filter((movie) =>
              movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
          );
        }
        setisLoading(false);
      });
  }, [query, searchQuery]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading movies...
      </div>
    );
  }
  return (
    <>
      <p className="my-10 text-left">
        We Have <span className="text-emerald-500">{Movies?.length}</span>{" "}
        Movies in This Page
      </p>
      <div className="flex items-center justify-around flex-wrap gap-10">
        {Movies?.map((e, i) => (
          <>
            {e.poster_path && (
              <Link
                href={`/movie/info/${query}/${page}/${e.id}`}
                key={i}
                className="p-4 w-1/6 h-[400px] text-center border-2 border-gray-50 rounded-lg cursor-pointer"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}
                  alt={`${e.title} poster`}
                  className="mx-auto rounded-sm"
                />
                <p className="my-4">{e.title}</p>
              </Link>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default Movie;
