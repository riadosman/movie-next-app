import React from "react";
import Link from "next/link";
async function getData() {
  const response = await fetch(
    "https://api.themoviedb.org/3/search/movie?page=2&query=superman&language=DZ",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWJjN2ZjNGU1MDlhZTkwODlmYzEwYzdiNGExNTYxOSIsInN1YiI6IjY1MGU2NGYzM2E0YTEyMDBlMjkzYjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iyeum86TsafQQE680a7WdBzjfdlqQpD5xSN6eiUv4I8`,
      },
    }
  );
  return response.json();
}
async function page() {
  const data = await getData();
  return (
    <div className="text-center mx-10 my-20">
      <div className="flex items-center justify-around flex-wrap gap-10">
        {data.results?.map((e, i) => (
          <>
            {e.poster_path && (
              <Link
                href={`/ar_movies/info/${e.id}`}
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
    </div>
  );
}

export default page;
