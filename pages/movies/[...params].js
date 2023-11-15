import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function Movie({ movie }) {
  const router = useRouter();
  const [title, id] = router.query.params || [];

  console.log(movie);

  return (
    <div>
      <Seo title={`${title || movie.original_title} | NEXT Movies`} />
      {title || movie.original_title || "Loading..."}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.params[1];
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
