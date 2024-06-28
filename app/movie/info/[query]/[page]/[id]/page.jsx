"use client";
import React, { useState, useEffect } from "react";

const page = ({ params }) => {
  const [Movie, setMovie] = useState(null);
  const [page, setpage] = useState(params.page);
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?page=${page}&query=${params.query}`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWJjN2ZjNGU1MDlhZTkwODlmYzEwYzdiNGExNTYxOSIsInN1YiI6IjY1MGU2NGYzM2E0YTEyMDBlMjkzYjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iyeum86TsafQQE680a7WdBzjfdlqQpD5xSN6eiUv4I8`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        data.results.map((e) => {
          if (e.id == params.id) {
            setMovie(e);
            setisloading(false);
          }
        });
        setisloading(false);
      });
  }, []);
  if (isloading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading movie...
      </div>
    );
  }
  return (
    <div className="flex items-center justify-around mx-20 gap-40 my-20">
      <img
        src={`https://image.tmdb.org/t/p/w400${Movie?.poster_path}`}
        alt={`${Movie?.title} poster`}
        className="mx-auto rounded-sm"
      />
      <div className="content">
        <p className="my-6 text-6xl">{Movie?.title}</p>
        <p className="my-4">
          <span className="text-sky-500">Original Language : </span>
          {Movie?.original_language}
        </p>
        <p className="my-4">
          <span className="text-sky-500">Original Title : </span>
          {Movie?.original_title}
        </p>
        <p className="my-4">
          <span className="text-sky-500">Overview : </span>
          {Movie?.overview}
        </p>
        <p className="my-4">
          <span className="text-sky-500">Popularity : </span>
          {Movie?.popularity}
        </p>
        <p className="my-4">
          <span className="text-sky-500">Release Date : </span>
          {Movie?.release_date}
        </p>
        <p className="my-4">
          <span className="text-sky-500">Vote Avarage : </span>
          {Movie?.vote_average}
        </p>
        <p className="my-4">
          <span className="text-sky-500">Vote Count : </span>
          {Movie?.vote_count}
        </p>
      </div>
    </div>
  );
};

export default page;
