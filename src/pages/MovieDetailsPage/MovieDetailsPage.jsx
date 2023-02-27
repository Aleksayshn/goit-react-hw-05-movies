import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieInfo, alertOnError } from 'services';
import { BackLink, Container, Loader, MovieCard } from 'components';
import { Wrapper, Link } from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';
  const isMoviesBackLink = location.state?.from.pathname.includes('movies');

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieInfo = await getMovieInfo(movieId);
        setMovie(movieInfo);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [movieId]);

  useEffect(() => {
    if (error) alertOnError();
  }, [error]);

  return (
    <main>
      <Container>
        {loading && <Loader />}
        {!!movie && (
          <div>
            <BackLink to={backLinkHref}>
              {isMoviesBackLink ? 'Back to Movies' : 'Back to HomePage'}
            </BackLink>
            <MovieCard movie={movie} />
            <h5>Additional information</h5>
            <Wrapper>
              <Link to="cast" state={{ from: backLinkHref }}>
                Cast
              </Link>
              <Link to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </Link>
            </Wrapper>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        )}
      </Container>
    </main>
  );
}
