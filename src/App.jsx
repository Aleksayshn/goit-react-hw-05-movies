import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'utils/routes';
import { Layout } from 'layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.MOVIES} element={<MoviesPage />} />
        <Route path={routes.MOVIE_DETAILS} element={<MovieDetailsPage />}>
          <Route path={routes.CAST} element={<Cast />} />
          <Route path={routes.REVIEWS} element={<Reviews />} />
        </Route>
        <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
