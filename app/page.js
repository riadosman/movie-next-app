import Image from "next/image";
import Stats from "../components/Stats";
import Link from "next/link";
async function getData() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWJjN2ZjNGU1MDlhZTkwODlmYzEwYzdiNGExNTYxOSIsInN1YiI6IjY1MGU2NGYzM2E0YTEyMDBlMjkzYjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Iyeum86TsafQQE680a7WdBzjfdlqQpD5xSN6eiUv4I8`,
      },
    }
  );
  return response.json();
}
export default async function Home() {
  const data = await getData();
  return (
    <div>
      <Image
        src="/hero.avif"
        width={100}
        height={100}
        alt="Hero"
        className="w-full"
      />
      <p className="text-center text-6xl my-16 text-emerald-500">Movies</p>
      <div className="flex items-center">
        <Image src="/movie.jpg" width={400} height={400} alt="Hero" />
        <div className="w-1/2 ml-40">
          <h2 className="text-6xl my-6">A film is</h2>
          <p>
            an artistic work that consists of telling a story or presenting a
            documentary or presentation through moving images. The film may be a
            motion picture shown in cinemas, or it may be a short film or
            documentary shown through other media such as television or the
            Internet.
          </p>
          <p className="my-6">
            Films vary in their types and styles. They may be dramatic, comedic,
            romantic, or fictional, and they may address social, political, or
            historical issues. Films are a means of entertainment, education and
            awareness, and play an important role in culture and society
          </p>
          <button className="btn bg-emerald-500 py-2 px-6 rounded-xl border-2 border-transparent duration-200 hover:border-emerald-500 hover:bg-transparent">
            <a href="/movie">Show Now </a>
          </button>
        </div>
      </div>
      <Stats />
      <div className="flex items-center justify-end">
        <div className="w-1/2 mr-40">
          <h2 className="text-6xl my-6">Films</h2>
          <p>
            also known as movies, are a form of artistic expression that tells
            stories or presents documentaries through moving images. Films can
            be cinematic productions shown in theaters or shorter formats, such
            as documentaries or shorts, that are broadcast through television or
            the internet.
          </p>
          <p className="my-6">
            Films, also known as movies, are a form of artistic expression that
            tells stories or presents documentaries through moving images. Films
            can be cinematic productions shown in theaters or shorter formats,
            such as documentaries or shorts, that are broadcast through
            television or the internet. Films vary in genres and styles,
            including drama, comedy, romance, and science fiction, and they can
            tackle social, political, or historical issues. They are a
            significant source of entertainment, education, and awareness,
            playing an essential role in culture and society.
          </p>
          <button className="btn bg-emerald-500 py-2 px-6 rounded-xl border-2 border-transparent duration-200 hover:border-emerald-500 hover:bg-transparent">
            <a href="/movie">Show Now </a>
          </button>
        </div>
        <Image src="/movie2.jpg" width={400} height={400} alt="Hero" />
      </div>
      <div>
        <p className="text-center text-6xl my-16 text-emerald-500">
          Top Rated Movies
        </p>
        <div className="flex items-center justify-around flex-wrap gap-10">
          {data.results?.map((e, i) => (
            <>
              {e.poster_path && (
                <div
                  key={i}
                  className="p-4 w-1/6 h-[400px] text-center border-2 border-gray-50 rounded-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}
                    alt={`${e.title} poster`}
                    className="mx-auto rounded-sm"
                  />
                  <p className="my-4">{e.title}</p>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
