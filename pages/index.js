import { useEffect, useState } from "react";

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
      const { results } = await (await fetch("/api/movies", options)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      {!movies && <h3>Loading...</h3>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 40px 20px;
          gap: 20px;
        }
        .movie {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
