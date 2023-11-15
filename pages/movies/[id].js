import { useRouter } from "next/router";

export default function Movie({ movie }) {
  console.log(movie);
  const router = useRouter();

  return <div>{router.query.title || "Loading..."}</div>;
}

export async function getServerSideProps({ params: { id } }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTRhMDFmMjYwMzBmZGZkMTNmYzc2YWZhZDYyNjk4NiIsInN1YiI6IjY1NTMxNTM0OTAzYzUyMDBhYzZkN2Q0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XOXX0l8kBYL87EbbqCc4kZoBKX_LhEoDmuk3N35eq-w",
    },
  };

  const response = await (
    await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
  ).json();

  return {
    props: {
      movie: response,
    },
  };
}
