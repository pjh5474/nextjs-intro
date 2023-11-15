import NavBar from "./NavBar";
import { useRouter } from "next/router";
import Seo from "./Seo";

export default function Layout({ children }) {
  const router = useRouter();
  const headObj = {
    "/": "Home",
    "/about": "About",
    "/movies": "Movies",
    "/movies/[...params]": "Movie",
  };
  return (
    <div className="body">
      <Seo title={`${headObj[router.pathname]} | NEXT Movies`} />
      <NavBar />
      <div>{children}</div>
      <style jsx>{`
        .body {
          min-width: 600px;
        }
      `}</style>
    </div>
  );
}
