import { Route, Routes } from "react-router-dom";
import { Home, Movies, MovieDetails, Cast, Reviews, NotFound } from "pages";
import { Container, Header, Logo, Link } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            📽
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/:movieId/reviews" element={<Reviews />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};