import { useEffect, useState } from "react";

const API_KEY = "fe4a01f26030fdfd13fc76afad626986";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTRhMDFmMjYwMzBmZGZkMTNmYzc2YWZhZDYyNjk4NiIsInN1YiI6IjY1NTMxNTM0OTAzYzUyMDBhYzZkN2Q0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XOXX0l8kBYL87EbbqCc4kZoBKX_LhEoDmuk3N35eq-w",
    },
  };

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch("https://api.themoviedb.org/3/movie/popular", options)
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {!movies && <h3>Loading...</h3>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
