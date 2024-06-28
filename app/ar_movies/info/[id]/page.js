import React from "react";
async function getData() {
  const response = await fetch(
    "https://api.themoviedb.org/3/search/movie?page=2&query=superman&language=ar",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWJjN2ZjNGU1MDlhZTkwODlmYzEwYzdiNGExNTYxOSIsInN1YiI6IjY1MGU2NGYzM2E0YTEyMDBlMjkzYjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iyeum86TsafQQE680a7WdBzjfdlqQpD5xSN6eiUv4I8`,
      },
    }
  );
  return response.json();
}
async function page({ params }) {
  const data = await getData();
  const filteredData = data.results?.filter((item) => item.id == params.id)[0];
  return (
    <div className="flex items-center justify-around mx-20 gap-40 my-20">
      <img
        src={`https://image.tmdb.org/t/p/w400${filteredData?.poster_path}`}
        alt={`${filteredData?.title} poster`}
        className="mx-auto rounded-sm"
      />
      <div className="content">
        <p className="my-6 text-6xl">{filteredData?.title}</p>
        <p className="my-4">
          <span className="text-sky-500">Original Language : </span>
          {filteredData?.original_language}
        </p>
        <p className="my-4">
          <span className="text-sky-500">Original Title : </span>
          {filteredData?.original_title}
        </p>
        <p className="my-4">
          <span className="text-sky-500">Overview : </span>
          {filteredData?.overview}
        </p>
        <p className="my-4">
          <span className="text-sky-500">Popularity : </span>
          {filteredData?.popularity}
        </p>
        <p className="my-4">
          <span className="text-sky-500">Release Date : </span>
          {filteredData?.release_date}
        </p>
        <p className="my-4">
          <span className="text-sky-500">Vote Avarage : </span>
          {filteredData?.vote_average}
        </p>
        <p className="my-4">
          <span className="text-sky-500">Vote Count : </span>
          {filteredData?.vote_count}
        </p>
      </div>
    </div>
  );
}

export default page;
