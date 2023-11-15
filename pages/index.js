import Link from "next/link";

export default function Home({ movies }) {
  return (
    <>
      <div className="container">
        {!movies && <h3>Loading...</h3>}
        {movies?.map((movie) => (
          <Link
            href={{
              pathname: `/movies/${movie.id}`,
              query: {
                title: movie.original_title,
              },
            }}
            as={`/movies/${movie.id}`}
            key={movie.id}
          >
            <div className="card">
              <div className="card-data">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              </div>
              <div className="card-data">
                <h4>{movie.original_title}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <style jsx global>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 40px 20px;
          gap: 20px;
        }
        .card {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 4fr 1fr;
          gap: 5px;
          cursor: pointer;
        }
        .card-data {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .card:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .card h4 {
          font-size: 18px;
          text-align: center;
        }
        a {
          text-decoration: none;
          color: #000;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTRhMDFmMjYwMzBmZGZkMTNmYzc2YWZhZDYyNjk4NiIsInN1YiI6IjY1NTMxNTM0OTAzYzUyMDBhYzZkN2Q0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XOXX0l8kBYL87EbbqCc4kZoBKX_LhEoDmuk3N35eq-w",
    },
  };

  const { results } = await (
    await fetch("http://localhost:3000/api/movies", options)
  ).json();

  return {
    props: {
      movies: results,
    },
  };
}
